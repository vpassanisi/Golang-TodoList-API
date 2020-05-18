package todo

import (
	"github.com/gin-gonic/gin"
)

// GetAllTodos //
// @desc Get all todos
// @route GET /api/v1/todos
// @access Private
func GetAllTodos(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "all todos",
	})
}
