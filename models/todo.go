package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Todo struct is for todos that are reutrned from mongodb query
type Todo struct {
	ID          primitive.ObjectID `bson:"_id" json:"_id"`
	Title       string             `json:"title"`
	Description string             `json:"description"`
	Done        bool               `json:"done"`
	CreatedAt   int64              `json:"createdAt"`
	UpdatedAt   int64              `json:"updatedAt"`
	User        string             `json:"user"`
}

// SetCreatedAt //
func (todo *Todo) SetCreatedAt() {
	todo.CreatedAt = time.Now().Unix()
}

// SetUpdatedAt //
func (todo *Todo) SetUpdatedAt() {
	todo.UpdatedAt = time.Now().Unix()
}

// NewTodo struct is to format todo for mongodb insert
type NewTodo struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Done        bool   `json:"done"`
	CreatedAt   int64  `json:"createdAt"`
	UpdatedAt   int64  `json:"updatedAt"`
	User        string `json:"user"`
}

// SetCreatedAt //
func (todo *NewTodo) SetCreatedAt() {
	todo.CreatedAt = time.Now().Unix()
}

// SetUpdatedAt //
func (todo *NewTodo) SetUpdatedAt() {
	todo.UpdatedAt = time.Now().Unix()
}
