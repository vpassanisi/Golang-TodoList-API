package todo

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mitchellh/mapstructure"
	"github.com/vpassanisi/TodoListAPI/models"
	"github.com/vpassanisi/TodoListAPI/util"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// UpdateTodo //
// @desc Updates a todo with id in request params and data in body
// @route PUT /api/v1/todos/:id
// @access Private
func UpdateTodo(c *gin.Context, client *mongo.Client) {

	// these will be the fields that will be updated
	updateFields := bson.M{
		"updatedat": time.Now().Unix(),
	}

	// bind the request body to update
	bindErr := c.ShouldBindJSON(&updateFields)
	if bindErr != nil {
		c.JSON(400, util.ResError{
			Success: false,
			Error:   bindErr,
		})
		return
	}

	// sets the operator for the fileds to be updated
	update := bson.M{"$set": updateFields}

	// new ObjectID from request params.  this is the id of the document to be updated
	id, objErr := primitive.ObjectIDFromHex(c.Param("id"))
	if objErr != nil {
		c.JSON(400, util.ResMessage{
			Success: false,
			Message: "That is not an id",
		})
	}

	// get collection from client
	todosCollection := client.Database("TodosDB").Collection("todos")

	// this will be the document BEFORE it has been updated
	// this must be a map so that I can index it and update the values because I want to return the updated document
	updated := bson.M{}

	// find one by id and update
	updateErr := todosCollection.FindOneAndUpdate(c.Request.Context(), bson.M{"_id": id}, update).Decode(&updated)
	if updateErr != nil {
		// ErrNoDocuments means that the filter did not match any documents in the collection
		if updateErr == mongo.ErrNoDocuments {
			c.JSON(400, util.ResMessage{
				Success: false,
				Message: "There is no todo with that id",
			})
			return
		}
		c.JSON(500, util.ResError{
			Success: false,
			Error:   updateErr,
		})
	}

	// merge the updated fileds with the document that has been returned form the update operation
	for key, value := range updateFields {
		updated[key] = value
	}

	// the response struct takes models.Todo{} so this function will fill it will the updated document
	// it cannot recognize primitive.ObjectID so I just did it manually :(
	updatedTodo := models.Todo{}
	updatedTodo.ID = updated["_id"].(primitive.ObjectID)
	decodeErr := mapstructure.Decode(updated, &updatedTodo)
	if decodeErr != nil {
		c.JSON(500, util.ResError{
			Success: false,
			Error:   decodeErr,
		})
	}

	// respond using response struct
	c.JSON(200, util.ResTodo{
		Success: true,
		Message: updatedTodo,
	})
}
