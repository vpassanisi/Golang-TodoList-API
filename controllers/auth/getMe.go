package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/util"
	"go.mongodb.org/mongo-driver/mongo"
)

// GetMe //
// @desc Used to tell the client if they are logged in, since the credencials cookies cannot be read
// @route GET /api/v1/auth/getMe
// @access Private
func GetMe(c *gin.Context, client *mongo.Client) {
	// This is a protected route by design, so if the request hits this func it is authenticated and should respond with 200. else it will get "not logged in" or "invalid token"
	c.JSON(200, util.ResMessage{
		Success: true,
		Message: "You are logged in ༼ つ ◕_◕ ༽つ",
	})
}
