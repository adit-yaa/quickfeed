package ag

import (
	"context"
	"reflect"
	"time"

	"go.uber.org/zap"
	grpc "google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// MaxWait is the maximum time a request is allowed to stay open before aborting.
const MaxWait = 10 * time.Minute

type validator interface {
	IsValid() bool
}

// AGInterceptor returns a new unary server interceptor that validates requests
// that implements the validator interface.
// Invalid requests are rejected without logging and before it reaches any
// user-level code and returns an illegal argument to the client.
// In addition, the interceptor also implements a cancel mechanism.
func AGInterceptor(logger *zap.Logger) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		if v, ok := req.(validator); ok {
			if !v.IsValid() {
				return nil, status.Errorf(codes.InvalidArgument, "invalid payload")
			}
		} else {
			// just logging, but still handling the call
			logger.Sugar().Debugf("message type '%s' does not implement validator interface",
				reflect.TypeOf(req).String())
		}
		ctx, cancel := context.WithTimeout(ctx, MaxWait)
		defer cancel()
		return handler(ctx, req)
	}
}

// IsValid on void message always returns true.
func (v Void) IsValid() bool {
	return true
}

// IsValid checks required fields of a group request
func (grp Group) IsValid() bool {
	return grp.GetName() != "" && grp.GetCourseID() > 0 && len(grp.GetUsers()) > 0
}

// IsValid checks required fields of a course request
func (c Course) IsValid() bool {
	return c.GetName() != "" &&
		c.GetCode() != "" &&
		(c.GetProvider() == "github" || c.GetProvider() == "gitlab" || c.GetProvider() == "fake") &&
		c.GetOrganizationID() != 0 &&
		c.GetYear() != 0 &&
		c.GetTag() != ""
}

// IsValid chacks required fields of a user request
func (u User) IsValid() bool {
	return u.GetID() > 0
}

// IsValid checks required fields of an enrollment request.
func (req Enrollment) IsValid() bool {
	return req.GetStatus() <= Enrollment_TEACHER &&
		req.GetUserID() > 0 && req.GetCourseID() > 0
}

// IsValid checks whether RecordRequest fields are valid
func (req RecordRequest) IsValid() bool {
	return req.GetID() > 0
}

// IsValid checks required fields of a repository request
func (req RepositoryRequest) IsValid() bool {
	return req.GetCourseID() > 0 && req.GetType() <= Repository_COURSEINFO
}

// IsValid checks required fields of an action request.
// It must have a positive course ID and
// a positive user ID or group ID but not both.
func (req ActionRequest) IsValid() bool {
	uid, gid := req.GetUserID(), req.GetGroupID()
	return req.GetCourseID() > 0 &&
		(uid == 0 && gid > 0) ||
		(uid > 0 && gid == 0)
}

// IsValid checks that course ID is positive.
func (req EnrollmentRequest) IsValid() bool {
	return req.GetCourseID() > 0
}

// IsValidProvider validates provider string coming from front end
func (l Providers) IsValidProvider(provider string) bool {
	isValid := false
	for _, p := range l.GetProviders() {
		if p == provider {
			isValid = true
		}
	}
	return isValid
}
