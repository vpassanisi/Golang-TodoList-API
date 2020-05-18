package util

import (
	"github.com/vpassanisi/TodoListAPI/models"
)

// ResMessage //
// response struct
type ResMessage struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// ResError //
// response struct
type ResError struct {
	Success bool  `json:"success"`
	Error   error `json:"message"`
}

// ResUser //
// response struct
type ResUser struct {
	Success bool           `json:"success"`
	Message models.UserRes `json:"message"`
}

// ResTodo //
// response struct
type ResTodo struct {
	Success bool        `json:"success"`
	Message models.Todo `json:"message"`
}
