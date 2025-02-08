
/*

In JavaScript, Main Stack and Side Stack are terms related to how JavaScript handles 
execution and asynchronous operations.

---

1. Main Stack (Call Stack)
- What is it? 
  The main stack (or call stack) is where JavaScript executes synchronous code 
  line by line.  
- How it works? 
  - It follows LIFO (Last In, First Out).  
  - When a function is called, it gets pushed onto the stack.  
  - When it finishes execution, it gets popped off the stack.  

*/
// Example:

function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
}

first(); 
second(); 
console.log("End of script");

/*
### **Execution Order (Main Stack)**

1️⃣ first() is added → Executes → Removed
2️⃣ second() is added → Executes → Removed
3️⃣ console.log() executes → Script ends
```

🛑 **Blocking Issue:**  
Since JavaScript runs **single-threaded**, if the stack is busy, it **blocks** everything else.

---
/*
2. Side Stack (Task Queue & Web APIs)
- What is it?  
  The side stack handles asynchronous tasks like:
  - `setTimeout()`
  - `fetch()` (API requests)
  - `Event Listeners`

- How it works? 
  - These tasks go to Web APIs (browser-managed background processes).  
  - When completed, they move to the Task Queue or Microtask Queue.  
  - JavaScript only processes them when the Main Stack is empty.

*/

// Example with setTimeout():

console.log("Start");

setTimeout(() => {
    console.log("Delayed message");
}, 2000);

console.log("End");

/*
### **Execution Order (Main + Side Stack)**

1️⃣ console.log("Start"); → Prints immediately
2️⃣ setTimeout() → Goes to the Side Stack (Web API) → Waits for 2 seconds
3️⃣ console.log("End"); → Prints immediately
4️⃣ After 2 seconds, "Delayed message" moves from Side Stack to Main Stack and prints

🎯 Key Point: The "Delayed message" doesn’t block execution. JavaScript continues running 
the code.

---

### 3. How Main & Side Stack Work Together
1. Main Stack runs normal (synchronous) code.
2. Side Stack (Web APIs) handles async operations.
3. When async tasks complete, they wait until the Main Stack is free.
4. Then they move back to the Main Stack and execute.

*/