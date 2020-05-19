package auth

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/util"
)

// Logout //
// @desc Logout the user
// @route GET /api/v1/auth/logout
// @access Private
func Logout(c *gin.Context) {

	// secure cookie unles in development env
	secure := true
	if os.Getenv("GIN_ENV") == "development" {
		secure = false
	}

	// set a new empty cookie
	c.SetCookie("token", "", 2000, "/", "", secure, true)

	// responed with logged out
	c.JSON(200, util.ResMessage{
		Success: true,
		Message: "You have been logged out",
	})
}
