# JavaScript Execution Context and Call Stack - Interview Guide

## Table of Contents
- [1. Execution Context in JavaScript](#1-execution-context-in-javascript)
- [2. JavaScript is Synchronous and Single-Threaded](#2-javascript-is-synchronous-and-single-threaded)
- [3. Call Stack](#3-call-stack)
- [4. What Happens When You Run JavaScript Code?](#4-what-happens-when-you-run-javascript-code)
- [5. Key Points for Interviews](#5-key-points-for-interviews)
- [6. Common Interview Questions](#6-common-interview-questions)

---

## 1. Execution Context in JavaScript

In JavaScript, **everything happens inside an Execution Context**.

An **Execution Context** is an environment where JavaScript code is evaluated and executed.

### Types of Execution Contexts

There are two main types of Execution Contexts:

#### Global Execution Context (GEC)
- Created when the JavaScript program starts
- Responsible for executing global code (code not inside any function)
- Creates the global `window` object (in browsers) and the `this` keyword
- There is only **one** Global Execution Context per program

#### Function Execution Context (FEC)
- Created whenever a function is invoked
- Each function call gets its own execution context
- Multiple Function Execution Contexts can exist simultaneously

---

## 2. JavaScript is Synchronous and Single-Threaded

### Key Characteristics:
- **Single-threaded**: JavaScript can execute only one task at a time
- **Synchronous**: Executes code line by line in the order it appears
- **Asynchronous handling**: Can handle asynchronous tasks (e.g., `setTimeout`, Promises) using the Event Loop and Callback Queue (not part of the call stack)

---

## 3. Call Stack

The **Call Stack** is a data structure that maintains the order of execution of Execution Contexts.

### Alternative Names:
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

### How the Call Stack Works:

1. **When the program starts**:
   - The Global Execution Context (GEC) is created and pushed onto the Call Stack

2. **When a function is invoked**:
   - A new Function Execution Context (FEC) is created and pushed onto the Call Stack

3. **When a function completes**:
   - Its Execution Context is popped off the Call Stack

4. **When the Call Stack is empty**:
   - The program has finished executing

### Call Stack Principle:
The Call Stack follows the **LIFO (Last In, First Out)** principle.

---

## 4. What Happens When You Run JavaScript Code?

### Example Code:
```javascript
console.log("Start");

function greet() {
  console.log("Hello");
}

greet();

console.log("End");
```

### Execution Process:

#### Step 1: Global Execution Context (GEC)
- Created when the program starts
- `console.log("Start")` is executed, and **"Start"** is printed
- Function `greet` is declared and stored in memory

#### Step 2: Function Call (`greet()`)
- When `greet()` is invoked, a new Function Execution Context (FEC) is created and pushed onto the Call Stack
- Inside `greet()`, `console.log("Hello")` is executed, and **"Hello"** is printed
- After `greet()` finishes, its Execution Context is popped off the Call Stack

#### Step 3: Back to Global Execution Context
- The next line, `console.log("End")`, is executed, and **"End"** is printed
- Once all code is executed, the Global Execution Context is removed, and the Call Stack becomes empty

### Output:
```
Start
Hello
End
```

### Call Stack Visualization:

```
Call Stack during execution:

Initial:           After greet() call:    After greet() completes:
┌─────────────┐    ┌─────────────┐        ┌─────────────┐
│             │    │   greet()   │        │             │
│             │    │    FEC      │        │             │
│             │    ├─────────────┤        │             │
│   Global    │    │   Global    │        │   Global    │
│    GEC      │    │    GEC      │        │    GEC      │
└─────────────┘    └─────────────┘        └─────────────┘
```

---

## 5. Key Points for Interviews

### Execution Context:
- **Global Execution Context** is created first
- Each function call creates a new **Function Execution Context**
- Execution contexts contain variable environment, scope chain, and `this` binding

### Call Stack:
- Manages the order of execution of Execution Contexts
- Follows the **LIFO (Last In, First Out)** principle
- Stack overflow occurs when the call stack limit is exceeded (usually due to infinite recursion)

### JavaScript Runtime:
- **JavaScript is Single-Threaded**: Only one task is executed at a time
- **Asynchronous tasks** are handled by the Event Loop and Callback Queue (not the Call Stack)
- Web APIs handle asynchronous operations outside the main thread

---

## 6. Common Interview Questions

### Q1: What happens when you run JavaScript code?

**Answer:**
1. The **Global Execution Context** is created and pushed onto the Call Stack
2. Code is executed **line by line** in a synchronous manner
3. When a **function is invoked**, a new Function Execution Context is created and pushed onto the Call Stack
4. Once the function **completes**, its Execution Context is popped off the Call Stack
5. The process continues until the **Call Stack is empty**

### Q2: What is the difference between Execution Context and Call Stack?

**Answer:**
- **Execution Context** is the environment where code is executed (contains variables, functions, and scope)
- **Call Stack** is the data structure that manages the order of execution contexts using LIFO principle

### Q3: How does JavaScript handle asynchronous operations if it's single-threaded?

**Answer:**
JavaScript uses the **Event Loop** mechanism:
- Asynchronous operations are handled by **Web APIs** (outside the main thread)
- Completed async operations are placed in the **Callback Queue**
- The **Event Loop** moves callbacks from the queue to the call stack when the stack is empty

### Q4: What causes a "Stack Overflow" error?

**Answer:**
Stack Overflow occurs when:
- The call stack exceeds its maximum size limit
- Usually caused by **infinite recursion**
- Example: A function calling itself without a proper base case

```javascript
// This will cause stack overflow
function infiniteRecursion() {
  infiniteRecursion(); // No base case!
}
```

### Q5: Can you explain the LIFO principle in the context of Call Stack?

**Answer:**
**LIFO (Last In, First Out)** means:
- The **last** function called is the **first** to complete and be removed
- Functions are **pushed** onto the stack when called
- Functions are **popped** from the stack when they finish executing
- Similar to a stack of plates - you can only add/remove from the top

---

## Summary

Understanding Execution Context and Call Stack is fundamental to JavaScript development. This knowledge helps in:
- **Debugging** code effectively
- Understanding **scope and closures**
- Optimizing **performance**
- Avoiding **stack overflow** errors
- Comprehending **asynchronous** JavaScript behavior

This explanation demonstrates a clear understanding of how JavaScript works under the hood, which is crucial for technical interviews.