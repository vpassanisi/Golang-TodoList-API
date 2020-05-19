# Todo List Restful API

This is a simple rest api for CRUD oprations on todo list items. It uses jwt in cookies
for stateless authentication and authorization, and mongoDB Atlas via mongo-go-driver as the database, and gin-gonic as a framework.
There are structs for all responses to make errors and responses easier to manage on the front end, and also
for flexibility should you want to change something about the responses.

## Getting Started

In order for it to run you will need to make a .env in the root directory and provide MONGO_URI, PORT, JWT_SECRET, and GIN_MODE variables.
The .env will only load if environment variable GIN_ENV=development.
Use gin for live reload:

```
GIN_ENV=development gin run main.go
```

## Improvements

I think it would be cool to implement a way to revoke jwt. It is not the most practical thing to do but it would be
possible here with a redis black list for revoked tokens. You would need to make sure to delete the black listed tokens from
the list after they expire.

It needs a request rate limiter.
