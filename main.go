package main

import (
	"context"
	"os"
	"time"

	helmet "github.com/danielkov/gin-helmet"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/vpassanisi/TodoListAPI/config"
	"github.com/vpassanisi/TodoListAPI/routes"
)

func main() {
	// loads .env in root directory
	if os.Getenv("GIN_ENV") == "development" {
		godotenv.Load()
	}

	client := config.ConnectDB()

	router := gin.Default()

	// CORS middleware
	// i'm not sure this will be necessary but it is here for testing purposes
	// router.Use(middleware.Cors())

	// basic security headers
	router.Use(helmet.Default())

	routes.SetupRouter(router, client)

	router.Use(static.Serve("/svelte", static.LocalFile("./client/Svelte-TodoList/public", true)))
	router.Use(static.Serve("/react", static.LocalFile("./client/React-TodoList/build", true)))
	router.Use(static.Serve("/vue", static.LocalFile("./client/Vue-TodoList/dist", true)))

	router.Use(static.Serve("/docs", static.LocalFile("./client/docs", true)))

	router.Use(static.Serve("/", static.LocalFile("./client", true)))

	router.Run()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	defer client.Disconnect(ctx)

}
