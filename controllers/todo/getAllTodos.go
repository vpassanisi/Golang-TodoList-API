package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/models"
	"github.com/vpassanisi/TodoListAPI/util"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// GetAllTodos //
// @desc Get all todos
// @route GET /api/v1/todos
// @access Private
func GetAllTodos(c *gin.Context, client *mongo.Client) {

	// map of todos to be put in response
	todos := []models.Todo{}

	// get collection
	todosCollection := client.Database("TodosDB").Collection("todos")

	// query db and filter by user id
	cursor, findErr := todosCollection.Find(c.Request.Context(), bson.M{
		"user": c.Keys["id"],
	})
	if findErr != nil {
		c.JSON(500, util.ResError{
			Success: false,
			Error:   findErr,
		})
		return
	}

	// loop through cursor and put todos in the todos slice of todos
	if cursorErr := cursor.All(c.Request.Context(), &todos); cursorErr != nil {
		c.JSON(500, util.ResError{
			Success: false,
			Error:   cursorErr,
		})
		return
	}

	// respond with todos
	c.JSON(200, util.ResTodos{
		Success: true,
		Message: todos,
	})
}
