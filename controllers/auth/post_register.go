package auth

import (
	"context"
	"log"
	"net/http"

	"github.com/vpassanisi/TodoListAPI/util"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/vpassanisi/TodoListAPI/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// Register //
// @desc Create a new user from User struct and add it to the database
// @route POST /api/v1/auth/register
// @access Public
func Register(c *gin.Context, client *mongo.Client) {
	user := models.UserCred{}

	bindErr := c.ShouldBindJSON(&user)
	if bindErr != nil {
		log.Fatal(bindErr)
	}

	if user.Name == "" {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "Please add a name",
		})
		return
	} else if user.Email == "" {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "Please add an email",
		})
		return
	} else if user.Password == "" {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "Please add a password",
		})
		return
	}

	user.Encrypt(user.Password)

	usersCollection := client.Database("TodosDB").Collection("users")

	alreadyExists := models.UserDB{}

	findOneErr := usersCollection.FindOne(context.Background(), bson.M{"email": user.Email}).Decode(&alreadyExists)
	if findOneErr == nil {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "That email already exists",
		})
		return
	}

	insertOneResult, insertErr := usersCollection.InsertOne(context.Background(), user)
	if insertErr != nil {
		c.JSON(400, util.ResError{
			Success: false,
			Error:   insertErr,
		})
	} else {
		token, getSignedErr := user.GetSignedJWT(insertOneResult.InsertedID.(primitive.ObjectID).Hex())
		if getSignedErr != nil {
			c.JSON(400, util.ResError{
				Success: false,
				Error:   getSignedErr,
			})
			return
		}

		c.SetSameSite(http.SameSiteNoneMode)
		c.SetCookie("token", token, 2000, "/", "", true, true)

		c.JSON(200, util.ResUser{
			Success: true,
			Message: models.UserRes{
				Name:  user.Name,
				Email: user.Email,
			},
		})
	}
}
