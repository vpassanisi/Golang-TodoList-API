package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/util"
)

// Logout //
// @desc Logout the user
// @route GET /api/v1/auth/logout
// @access Private
func Logout(c *gin.Context) {
	// set a new empty cookie
	c.SetCookie("token", "", 2000, "/", "", false, true)

	// responed with logged out
	c.JSON(200, util.ResMessage{
		Success: true,
		Message: "You have been logged out",
	})
}
