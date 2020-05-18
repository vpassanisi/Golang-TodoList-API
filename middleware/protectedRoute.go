package middleware

import (
	"fmt"
	"os"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/util"
)

// ProtectedRoute //
// middleware that checks if the response contains a cookie called "token"
// if it does it parses the token and evaluates if the token is valid and not expired
// else it aborts and responds with not authorized
func ProtectedRoute() gin.HandlerFunc {
	// gin middleware must return a function with gin context as an argument (gin.HandlerFunc)
	return func(c *gin.Context) {
		// checks if the request has the token cookie
		tokenStr, cookieErr := c.Cookie("token")
		// if no cookie, abort and respond with not logged in
		if cookieErr != nil {
			c.Abort()
			c.JSON(401, util.ResMessage{
				Success: false,
				Message: "You are not logged in",
			})
			return
		}

		// parse the token.  Parse() uses the returned secret to assign validity and it chacks for expiration of the token
		token, parseErr := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("There was an error")
			}
			return []byte(os.Getenv("JWT_SECRET")), nil
		})
		// parse error aborts and returns
		if parseErr != nil {
			c.Abort()
			c.JSON(401, util.ResMessage{
				Success: false,
				Message: "Invalid token",
			})
			return
		}

		// if token is valid and claims are mapped set the users id to the context map with key "id" else abort
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			c.Set("id", claims["id"])
			c.Next()
		} else {
			c.Abort()
			c.JSON(401, util.ResMessage{
				Success: false,
				Message: "There was a problem",
			})
		}
	}
}
