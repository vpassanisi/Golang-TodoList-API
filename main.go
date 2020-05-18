package main

import (
	"context"
	"time"

	"github.com/joho/godotenv"
	"github.com/vpassanisi/TodoListAPI/config"
	"github.com/vpassanisi/TodoListAPI/routes"
)

func main() {
	// loads .env in root directory
	godotenv.Load()

	// client connection to mongodb
	client := config.ConnectDB()

	// gin router instance
	router := routes.SetupRouter(client)

	// runst the router
	router.Run()

	// disconnect from mongodb
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	defer client.Disconnect(ctx)

}
