package main

import (
	"context"
	"os"
	"time"

	helmet "github.com/danielkov/gin-helmet"
	"github.com/gin-contrib/cors"
	"github.com/joho/godotenv"
	"github.com/vpassanisi/TodoListAPI/config"
	"github.com/vpassanisi/TodoListAPI/routes"
)

func main() {
	// this needs a check for the environment and not load if in production
	// loads .env in root directory
	if os.Getenv("GIN_ENV") == "development" {
		godotenv.Load()
	}

	// client connection to mongodb
	client := config.ConnectDB()

	// gin router instance
	router := routes.SetupRouter(client)

	// CORS middleware
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	// basic security headers
	router.Use(helmet.Default())

	// run the router
	router.Run()

	// disconnect from mongodb
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	defer client.Disconnect(ctx)

}
