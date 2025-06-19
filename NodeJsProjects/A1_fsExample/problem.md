### Problem Statement
    Create a Node.js application using the fs module that simulates basic data handling in a JSON file. The file (data.json) will act like a simple in-memory database storing an array of objects (like an API data structure).

### Core Functionalities
    You must implement the following features using synchronous methods from the fs module (fs.promises recommended):

1. Add a New Object to the File

    Accepts input from the user via process.argv or process.stdin.

    Appends a new object to the array inside data.json.

    If the file doesn’t exist, create it with an array containing the new object.

2. Read and List All Content

    Reads the contents of data.json.

    Parses and displays each object in a user-friendly way.

    If the file is empty or doesn't exist, show an appropriate message.

3. Delete All File Content

    Clears all data in the file but retains the file itself.

    After clearing, the file should contain an empty array ([]).

### Functional Requirements
    File Format: The file data.json must store an array of JSON objects.
    Example:
        [
            { "id": 1, "name": "Alice", "role": "Admin" },
            { "id": 2, "name": "Bob", "role": "User" }
        ]

### Usage Instructions
    The app must be executable via command-line like:
        node index.js write Alice Admin
        node index.js read
        node index.js delete Alice


