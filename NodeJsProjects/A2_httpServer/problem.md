# 📝 Problem Statement: Basic HTTP Server with Route Handling and Logging

## Objective
Create a basic HTTP server using **Node.js** that can handle multiple routes using a `switch` statement and logs every incoming request's details.

---

## 📌 Requirements

### 1. Create an HTTP Server
- Use Node.js built-in `http` module.
- Server should listen on a specified port (e.g., `3000`).

### 2. Implement Route Handling Using `switch` Case
- Use a `switch` statement to handle different request paths like:
  - `/` – Respond with "Welcome to the Home Page"
  - `/about` – Respond with "This is the About Page"
  - `/contact` – Respond with "This is the Contact Page"
- Any unrecognized route should respond with a **404 message** like "Page not found".

### 3. Log Request Information
For every incoming request, log the following details to the console:
- **Timestamp** (in ISO format)
- **HTTP Method** (e.g., GET, POST)
- **Requested URL**

**Example Log:**

    log.txt

    [2025-06-19T14:23:01.123Z] GET /about