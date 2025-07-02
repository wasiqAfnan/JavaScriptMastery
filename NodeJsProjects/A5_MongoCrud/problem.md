# 🚀 Problem Statement: Create a REST API for User Management using MongoDB Atlas

## 📌 Objective

Develop a RESTful API using **Node.js** and **Express** that performs **CRUD operations** on user data. The data should be stored and retrieved from a **MongoDB Atlas** database using **Mongoose**.

---

## 🗄️ Data Storage

- Use **MongoDB Atlas** as the cloud database.
- Store user data as documents in a `users` collection.
- Each user document must include the following fields:
  - `id` (unique identifier)
  - `name`
  - `email`
  - `age` (optional)

---

## 📡 API Endpoints

### ✅ GET `/api/users`
- Returns a list of all users.
- Fetches from MongoDB Atlas.

### ✅ GET `/api/user/:id`
- Returns a specific user by ID.
- Responds with `404` if the user is not found.

### ✅ POST `/api/user`
- Creates a new user.
- Accepts user data in the request body (`name`, `email`, `age`).
- Generates a unique `id` for the new user.
- Saves the user to MongoDB.
- Returns the `id` of the newly created user.
- Responds with `201 Created`.

### ✅ PATCH `/api/user/:id`
- Updates specific fields of a user by ID.
- Accepts partial user data in the request body.
- Updates the user record in MongoDB.
- Responds with updated user data.
- Responds with `404` if the user is not found.

### ✅ DELETE `/api/user/:id`
- Deletes a user by ID from MongoDB.
- Responds with a success message or `404` if the user is not found.

---

## ⚙️ Constraints

- Use **Mongoose** to connect and interact with MongoDB Atlas.
- Do **not** use file-based storage (e.g., `fs`, `data.json`).
- Handle all errors gracefully (e.g., user not found, invalid data).
- Use appropriate **HTTP status codes** for each operation.
- Ensure RESTful design and naming conventions.

---

## 📦 Deliverables

- `app.js` or `server.js`: Main file containing Express server setup and API route logic.
- MongoDB Atlas connection using Mongoose.
- REST API routes implementing the required operations.

---

## 🧪 Example Request

### `POST /api/user`

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```
#### Response (201 Created)
```json
{
  "id": "64a123abc456...",
  "message": "User created successfully"
}
```

## Notes
- Make sure to secure your MongoDB Atlas credentials (e.g., using environment variables).
- Use tools like Postman to test the API endpoints.