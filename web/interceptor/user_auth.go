package interceptor

import (
	"context"
	"fmt"
	"net/http"

	"github.com/bufbuild/connect-go"
	"go.uber.org/zap"

	"github.com/quickfeed/quickfeed/web/auth"
)

type userInterceptor struct {
	tm     *auth.TokenManager
	logger *zap.SugaredLogger
}

func NewUserInterceptor(logger *zap.SugaredLogger, tm *auth.TokenManager) *userInterceptor {
	return &userInterceptor{
		tm:     tm,
		logger: logger,
	}
}

func (u *userInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return connect.StreamingHandlerFunc(func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		return next(ctx, conn)
	})
}

func (u *userInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return connect.StreamingClientFunc(func(ctx context.Context, spec connect.Spec) connect.StreamingClientConn {
		return next(ctx, spec)
	})
}

// UnaryUserVerifier returns a unary server interceptor verifying that the user is authenticated.
// The request's session cookie is verified that it contains a valid JWT claim.
// If a valid claim is found, the interceptor injects the user ID as metadata in the incoming context
// for service methods that come after this interceptor.
// The interceptor also updates the session cookie if needed.
func (u *userInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return connect.UnaryFunc(func(ctx context.Context, request connect.AnyRequest) (connect.AnyResponse, error) {
		cookie := request.Header().Get(auth.Cookie)
		claims, err := u.tm.GetClaims(cookie)
		if err != nil {
			return nil, connect.NewError(connect.CodeUnauthenticated, fmt.Errorf("failed to extract JWT claims from session cookie: %w", err))
		}
		var updatedCookie *http.Cookie
		if u.tm.UpdateRequired(claims) {
			u.logger.Debug("Updating cookie for user ", claims.UserID)
			updatedCookie, err = u.tm.UpdateCookie(claims)
			if err != nil {
				return nil, connect.NewError(connect.CodeUnauthenticated, fmt.Errorf("failed to update session cookie: %w", err))
			}
		}

		response, err := next(claims.ClaimsContext(ctx), request)
		if err != nil {
			return nil, err
		}
		if updatedCookie != nil {
			response.Header().Set(auth.SetCookie, updatedCookie.String())
		}
		return response, nil
	})
}
