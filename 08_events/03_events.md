# 📜 JavaScript Async Example: `setTimeout()` and `clearTimeout()`

This example demonstrates the **asynchronous behavior** of JavaScript using `setTimeout()` and `clearTimeout()` with `addEventListener()`.

---

## ✅ Purpose of the Code

- Schedule delayed actions using `setTimeout()`
- Cancel scheduled actions using `clearTimeout()`
- Use event listeners to allow user interactions

---

## 🧠 Concepts Covered (Interview Focus)

| Concept              | Explanation                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `setTimeout()`       | Executes a function after a specified delay (non-blocking)                  |
| `clearTimeout()`     | Cancels a previously scheduled `setTimeout()`                               |
| `addEventListener()` | Listens for user actions (e.g. button click)                                |
| Async Behavior       | Demonstrates non-blocking and delayed execution flow                        |

---

## 💻 Code Explanation

```html
<!-- HTML -->
<h1>Javascript Interview</h1>
<button id="stop">Stop</button>


```javascript```
// JS
const adarsh = function() {
    console.log("adarsh");
}
setTimeout(adarsh, 2000); // Will log "adarsh" after 2 seconds

const changeText = function() {
    document.querySelector('h1').innerHTML = "Hello World";
}

const changeMe = setTimeout(changeText, 2000); // Will attempt to change text
clearTimeout(changeMe); // Cancels the changeText before it happens

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe); // Cancel again on button click
    console.log("STOPPED");
});
```


## 🔁 Output Scenarios

| Scenario                              | Output                                                                 |
|---------------------------------------|------------------------------------------------------------------------|
| Do nothing                            | ✅ Logs `"adarsh"` after 2 seconds.<br>❌ Text does **not** change.     |
| Click `Stop` within 2 seconds         | ✅ Logs `"STOPPED"` in console.<br>❌ Text does **not** change.         |
| Remove `clearTimeout(changeMe)` line  | ✅ Logs `"adarsh"` after 2 seconds.<br>✅ Changes `<h1>` to "Hello World". |


## 🎯 Interview Highlights: setTimeout & clearTimeout

1. **What does `setTimeout()` return?**  
   • A unique timeout ID (a number) which can be used with `clearTimeout()`.

2. **Why use `clearTimeout()`?**  
   • To cancel a scheduled task before it runs — helpful in interactive applications (e.g., stop countdowns, cancel animations, etc.).

3. **Is JavaScript synchronous or asynchronous?**  
   • JavaScript is **synchronous by default**.  
   • It supports **asynchronous behavior** using features like `setTimeout`, Promises, `async/await`, etc.

4. **What happens if `clearTimeout()` is called after execution?**  
   • Nothing happens — the task has already executed.

5. **Can you manage multiple timers at once?**  
   • Yes, store multiple `setTimeout()` IDs in variables and cancel them individually.

---

> 💡 **Note:** Use `setInterval()` and Promises for advanced async patterns, and always consider the **Event Loop** behavior when working with async code.