# 🛠️ Problem Statement: Refactoring Express.js App to MVC Architecture

## Background

You have developed a backend application using **Express.js** and **MongoDB** that performs basic **CRUD operations** on user data. The application has the following endpoints:

- `GET /api/user` – Fetch all users  
- `POST /api/user` – Create a new user  
- `GET /api/users/:id` – Fetch a single user by ID  
- `PATCH /api/users/:id` – Update a user by ID  
- `DELETE /api/users/:id` – Delete a user by ID  

All of this functionality is currently handled within a **single file (`index.js`)**.

---

## Problem

While functional, maintaining all logic (routing, controller logic, database operations, and configuration) in a single file leads to:

- Poor separation of concerns
- Difficulty in debugging and testing
- Reduced scalability and maintainability
- Code that is harder to organize and extend

---

## Objective

Refactor the existing monolithic code into a modular structure by applying the **MVC (Model-View-Controller)** design pattern. This structure will:

- Improve code organization and maintainability
- Make it easier to scale the application
- Follow best practices used in real-world applications

---

## Proposed Folder Structure
```pgsql
project/
├── controllers/
│ └── userController.js # Logic for handling user-related requests
├── models/
│ └── userModel.js # Mongoose schema for the User model
├── routes/
│ └── userRoutes.js # Defines routes and connects them to controllers
├── config/
│ └── connection.js # MongoDB connection logic
├── .env # Environment variables (e.g., Mongo URI)
├── .gitignore # Ignore node_modules and sensitive files
├── index.js # Entry point that wires everything together
└── package.json # Project metadata and dependencies
```
---
## Environment Variables

Create a `.env` file in your root directory to store your MongoDB URI and other secrets.

---

## Outcome

With this structure:

- Routing, logic, and database access are clearly separated
- The codebase becomes cleaner and easier to navigate
- Future features like validation, middleware, and authentication can be integrated seamlessly



