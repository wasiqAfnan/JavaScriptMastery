# Problem Statement: Create a REST API for User Management using JSON File Storage

## Objective

Develop a RESTful API using Node.js and Express that performs **CRUD operations** on user data. The data should be stored and retrieved from a local file named `data.json`.

## Requirements

### 1. Data Storage
- Use a file named `data.json` as a simple file-based database.
- Store user data as an array of user objects in JSON format.
- Each user object must have at least the following fields:
  - `id` (unique identifier)
  - `name`
  - `email`
  - `age` (optional)

### 2. API Endpoints

#### GET `/api/users`
- Returns a list of all users.
- Read from `data.json`.

#### GET `/api/user/:id`
- Returns a specific user by ID.
- Respond with `404` if the user is not found.

#### POST `/api/user`
- Creates a new user.
- Accepts user data in the request body (`name`, `email`, `age`).
- Generates a unique `id` for the new user.
- Saves the new user to `data.json`.
- Returns the `id` of the newly created user also `201` created status.

#### PATCH `/api/user/:id`
- Updates specific fields of a user by ID.
- Accepts partial user data in the request body.
- Updates the user record in `data.json`.
- Responds with the updated user data.
- Respond with `404` if the user is not found.

#### DELETE `/api/user/:id`
- Deletes a user by ID from `data.json`.
- Respond with appropriate success or `404` message.

## Constraints

- Use only built-in `fs` module for file operations.
- Do not use a database (e.g., MongoDB, MySQL).
- Handle errors gracefully (e.g., missing user, invalid JSON).
- Ensure the API is RESTful and follows correct HTTP status codes.

## Bonus (Optional)
- Add input validation for POST and PATCH requests.
- Handle case for generating unique user IDs.

## Deliverables

- `data.json`: A file storing user records in JSON array format.
- `server.js` or `app.js`: The main file containing Express server and route handlers.
- API routes handling logic for GET, POST, PATCH, DELETE as specified above.

## Example

### Request:
```http
POST /api/user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
  "age":25
}
