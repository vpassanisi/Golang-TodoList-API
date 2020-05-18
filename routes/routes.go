package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/controllers/auth"
	"github.com/vpassanisi/TodoListAPI/controllers/todo"
	"github.com/vpassanisi/TodoListAPI/middleware"
	"go.mongodb.org/mongo-driver/mongo"
)

// SetupRouter //
// creates gin router and defines routes
func SetupRouter(client *mongo.Client) *gin.Engine {
	router := gin.Default()

	// routes for todo CRUD
	todos := router.Group("/api/v1/todos")
	{
		todos.GET("", middleware.ProtectedRoute(), func(c *gin.Context) {
			todo.GetAllTodos(c, client)
		})
		todos.POST("", middleware.ProtectedRoute(), func(c *gin.Context) {
			todo.CreateTodo(c, client)
		})
	}

	// routes for authorization and authentication
	authentication := router.Group("/api/v1/auth")
	{
		authentication.POST("/login", func(c *gin.Context) {
			auth.Login(c, client)
		})
		authentication.POST("/register", func(c *gin.Context) {
			auth.Register(c, client)
		})
	}

	// returns router so it can be ran in main.go
	return router
}
