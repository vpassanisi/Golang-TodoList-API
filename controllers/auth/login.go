package auth

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/vpassanisi/TodoListAPI/models"
	"github.com/vpassanisi/TodoListAPI/util"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

// Login //
// @desc Login in user with provided credentials
// @route POST /api/v1/auth/login
// @access Public
func Login(c *gin.Context, client *mongo.Client) {
	// bind request body to struct
	credentials := models.UserCred{}
	bindErr := c.ShouldBindJSON(&credentials)
	if bindErr != nil {
		log.Fatal(bindErr)
	}

	// holds the result of the db query
	result := models.UserDB{}

	// gets collection
	usersCollection := client.Database("TodosDB").Collection("users")

	// query for the user email because that is unique
	findOneErr := usersCollection.FindOne(c.Request.Context(), bson.M{
		"email": credentials.Email,
	}).Decode(&result)
	// if query error respond with wrong email
	if findOneErr != nil {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "That email does not exist",
		})
	}

	// compare encrypted passowrd to provided password
	compErr := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(credentials.Password))
	// if there is an error the provided password was incorrect else sign in the user and respond with cookie
	if compErr != nil {
		c.JSON(401, util.ResMessage{
			Success: false,
			Message: "Incorred password",
		})
	} else {
		// get a signed token containing the users _id
		token, getSignedErr := credentials.GetSignedJWT(result.ID.Hex())
		// jwt errror, should be rare but needs to return
		if getSignedErr != nil {
			c.JSON(400, util.ResError{
				Success: false,
				Error:   getSignedErr,
			})
			return
		}

		// secure cookie unles in development env
		secure := true
		if os.Getenv("GIN_ENV") == "development" {
			secure = false
		}

		// strict for csrf safety
		c.SetSameSite(http.SameSiteStrictMode)

		// set cookie
		c.SetCookie("token", token, 2000, "/", "", secure, true)

		// response struct
		c.JSON(200, util.ResUser{
			Success: true,
			Message: models.UserRes{
				Name:  result.Name,
				Email: result.Email,
			},
		})
	}
}
