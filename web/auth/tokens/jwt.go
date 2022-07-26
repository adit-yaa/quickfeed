package tokens

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/quickfeed/quickfeed/database"
	"github.com/quickfeed/quickfeed/internal/rand"
	"github.com/quickfeed/quickfeed/qf"
)

var (
	authCookieName = "auth"
	expirationTime = 15 * time.Minute
	// Will refresh token when it is less then refreshTime till token expiration.
	refreshTime = 1 * time.Minute
	alg         = "HS256"
)

// Claims contain the bearer information.
type Claims struct {
	jwt.StandardClaims
	UserID  uint64                              `json:"user_id"`
	Admin   bool                                `json:"admin"`
	Courses map[uint64]qf.Enrollment_UserStatus `json:"courses"`
	Groups  []uint64                            `json:"groups"`
}

// TokenManager creates and updates JWTs.
type TokenManager struct {
	updateTokens []uint64
	db           database.Database
	expireAfter  time.Duration
	secret       string
	domain       string
	cookieName   string
}

// NewTokenManager starts a new token manager. Will create a list with all tokens that need update.
func NewTokenManager(db database.Database, domain string) (*TokenManager, error) {
	if domain == "" {
		return nil, errors.New("failed to create a new token manager: missing domain")
	}
	manager := &TokenManager{
		db:          db,
		expireAfter: expirationTime,
		secret:      rand.String(),
		domain:      domain,
		cookieName:  authCookieName,
	}
	if err := manager.updateTokenList(); err != nil {
		return nil, err
	}
	return manager, nil
}

// NewAuthCookie creates a signed JWT cookie from user ID.
func (tm *TokenManager) NewAuthCookie(userID uint64) (*http.Cookie, error) {
	claims, err := tm.newClaims(userID)
	if err != nil {
		return nil, err
	}
	signedToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(tm.secret))
	if err != nil {
		return nil, fmt.Errorf("failed to sign token: %s", err)
	}
	return &http.Cookie{
		Name:     tm.cookieName,
		Value:    signedToken,
		Domain:   tm.domain, // TODO(vera): looks like you have to omit this field when working on localhost
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		Expires:  time.Now().Add(tm.expireAfter),
		SameSite: http.SameSiteStrictMode,
	}, nil
}

// GetClaims returns validated user claims.
func (tm *TokenManager) GetClaims(tokenString string) (*Claims, error) {
	claims := &Claims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(t *jwt.Token) (interface{}, error) {
		// It is necessary to check for correct signing algorithm in the header due to JWT vulnerability
		//  (ref https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/).
		if t.Header["alg"] != alg {
			return nil, fmt.Errorf("incorect signing algorithm, expected %s, got %s", alg, t.Header["alg"])
		}
		return []byte(tm.secret), nil
	})
	if err != nil {
		return nil, err
	}
	fmt.Printf("Signing algorithm in header: %+v", token.Header["alg"]) // tmp

	claims, ok := token.Claims.(*Claims)
	if !ok || !token.Valid {
		return nil, fmt.Errorf("failed to parse token: validation error")
	}
	return claims, nil
}

func (tm *TokenManager) GetAuthCookieName() string {
	return tm.cookieName
}

// newClaims creates new JWT claims for user ID.
func (tm *TokenManager) newClaims(userID uint64) (*Claims, error) {
	usr, err := tm.db.GetUserWithEnrollments(userID)
	if err != nil {
		return nil, err
	}
	log.Println("Making new claims with expiration time: ", time.Now().Add(tm.expireAfter).Unix())
	newClaims := &Claims{
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tm.expireAfter).Unix(),
			IssuedAt:  time.Now().Unix(),
			Issuer:    "QuickFeed",
		},
		UserID: userID,
		Admin:  usr.IsAdmin,
	}
	userCourses := make(map[uint64]qf.Enrollment_UserStatus)
	for _, enrol := range usr.Enrollments {
		userCourses[enrol.GetCourseID()] = enrol.GetStatus()
	}
	newClaims.Courses = userCourses
	return newClaims, nil
}
