# Problem Statement: Create a Server using HTTP Module with Express App Instance

## Objective

Create a Node.js server using the built-in `http` module and integrate it with an Express application instance to handle all routes.

## Requirements

1. **Create an Express app instance**:
   - Use the `express` module to initialize an app using `const app = express()`.

2. **Create an HTTP server**:
   - Use Node.js's built-in `http` module.
   - Pass the Express `app` instance as the request handler to the `http.createServer()` method.

3. **Handle routing using Express**:
   - Define at least one sample route using `app.get()` to return a response (e.g., "Hello World").

4. **Start the server**:
   - Use `server.listen()` from the `http` module to start the server on a specified port (e.g., 3000).
   - Log a message to the console once the server is running.

## Constraints

- Do not use `app.listen()` for starting the server.
- Ensure all routing is handled by the Express app.
- Code must be modular and readable.

## Example Output

When accessing `http://localhost:3000/`, the browser should display:
Hello World
