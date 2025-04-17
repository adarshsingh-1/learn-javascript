# 📘 Asynchronous JavaScript – Interview Notes

---

## ✅ JavaScript Engine Architecture

### 🔹 Components:
- **Memory Heap**: Where objects and variables are stored.
- **Call Stack**: Stack structure that keeps track of function calls.

### 🔹 Web APIs (Browser-provided):
- `setTimeout()`, `setInterval()`, `fetch()`, DOM Events, etc.
- Not part of JS itself, but provided by browsers or Node.js environment.

### 🔹 Flow of Asynchronous Code:
1. Call stack executes code line by line.
2. When async function (like `setTimeout`) is encountered:
   - It is moved to **Web API**.
   - A callback is **registered**.
3. After completion (timeout, response, etc.):
   - Callback moves to **Callback Queue** (or **Microtask Queue** for Promises).
4. **Event Loop** checks if the call stack is empty:
   - If yes, it **pushes callback** from queue to call stack.

### 🎯 Microtask Queue > Callback Queue
- Promises and `queueMicrotask()` callbacks go to **Microtask Queue**.
- Always executed **before** `setTimeout`, `setInterval` callbacks.

---

## 🧠 Blocking vs Non-Blocking Code

| Blocking Code             | Non-Blocking Code              |
|---------------------------|--------------------------------|
| Blocks the flow           | Doesn't block the flow         |
| Synchronous operations    | Asynchronous operations        |
| Example: `readFileSync()` | Example: `readFileAsync()`     |

- **Blocking**: Each operation waits for the previous one to complete.
- **Non-blocking**: Executes other tasks while waiting for the async task.

---

## ⚙️ JavaScript Execution Model

- **Synchronous by default**
- **Single-threaded** (only one call stack)
- Uses **Execution Context**:
  - Each function call creates a context.
  - Managed by **Call Stack**
- Executes one line at a time.

### 📦 Key Components:
- **Call Stack** → Tracks function execution.
- **Memory Heap** → Stores variables, objects.

---

## 📌 Most Important Concepts

- JavaScript = Single-threaded, Synchronous (by default)
- Browser/Web APIs handle async tasks like timers, HTTP, events
- **Event Loop** controls the transfer of callbacks to the call stack
- Promises use **Microtask Queue**, which runs before normal callbacks
- Non-blocking I/O is the backbone of JS performance

---

## 🔁 Real-World Examples

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

## 🎯 Interview Quick Answers

### 1. Why is JavaScript single-threaded?

Because it has only **one call stack** and executes **one operation at a time**, ensuring synchronous execution by default.

---

### 2. How is asynchronous behavior handled in JavaScript?

- Asynchronous functions (like `setTimeout`, `fetch`, Promises) are handled by **Web APIs** provided by the browser.
- Once the task is complete, the **callback** is pushed to a **queue**.
- The **Event Loop** checks the call stack and pushes callbacks when it's empty.

---

### 3. What is the difference between `setTimeout` and Promises?

| Feature          | `setTimeout`                | `Promise`                        |
|------------------|-----------------------------|----------------------------------|
| Queue type       | Task Queue (Macrotask Queue) | Microtask Queue                  |
| Execution order  | Executed **after** microtasks | Executed **before** setTimeout  |
| Use case         | Delayed execution            | Immediate async resolution       |

> ✅ Promises have **higher priority** in the event loop than `setTimeout`.

---

### 4. What is the Event Loop?

- The **Event Loop** constantly monitors the **Call Stack** and **Task/Microtask Queues**.
- If the **Call Stack is empty**, it pushes the first callback from the **Microtask Queue** (or **Task Queue** next) to the stack for execution.
- It ensures **non-blocking behavior** in single-threaded JavaScript.

---