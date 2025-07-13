# 🛡️ User Authentication & Authorization System - Problem Statement

## 📘 Overview

You are tasked with building a basic **Authentication and Authorization system** using Node.js, Express, MongoDB (with Mongoose), and JWT-based authentication. The system should allow users to register, log in, and securely access protected resources. It uses **HTTP-only cookies** (handled using the `cookie-parser` package) to store JWT tokens for client-side security.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ORM  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** HTTP-only Cookies (with `cookie-parser`)  
- **Misc:** Parcel (for frontend if needed)


---

## 🚀 Functional Requirements

### 1. **User Registration**

- **Endpoint:** `POST /api/auth/register`
- **Description:** Allows a new user to register by providing necessary details (e.g., name, email, password).
- **Behavior:**
  - Hashes the password before storing it in the database.
  - Returns success message on successful registration.

---

### 2. **User Login**

- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates a user and issues a JWT token.
- **Behavior:**
  - Verifies user credentials.
  - Generates a JWT token.
  - Stores the token in an HTTP-only cookie using `cookie-parser`.
  - Returns login success response.

---

### 3. **User Logout**

- **Endpoint:** `POST /api/auth/logout`
- **Description:** Logs the user out by clearing the authentication cookie.
- **Behavior:**
  - Clears the token cookie from the client.
  - Returns logout confirmation.

---

### 4. **Protected Route - Dashboard**

- **Endpoint:** `GET /api/board/dashboard`
- **Description:** This is a protected route. Only authenticated users can access it.
- **Access Control:**
  - Verifies the JWT token from cookies using middleware.
  - If valid, proceeds to the controller.
  - If invalid or missing, returns a 401 Unauthorized response.

---

## 🔐 Security Measures

- JWT tokens are stored in **HTTP-only cookies** to prevent XSS attacks.
- Cookies are managed using the `cookie-parser` middleware.
- Passwords are hashed before storing using libraries like `bcryptjs`.
- Routes are protected using custom middleware that checks for valid JWT tokens.

---

## ✅ Objectives

By completing this project, the developer will:

- Understand how to build a secure authentication system using JWT.
- Use Express middleware for access control and cookie parsing.
- Implement secure cookie handling and token storage using `cookie-parser`.
- Practice building modular routes in an Express app.

---

## 📌 Note

This system does not include advanced features like role-based access control, email verification, or refresh tokens. It is a foundational auth system to build upon.
