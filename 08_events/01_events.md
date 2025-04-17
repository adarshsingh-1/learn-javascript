# JavaScript Events

## 🔹 What Are Events in JavaScript?

In **JavaScript**, an **event** is an action or occurrence that happens in the browser, which JavaScript can respond to.

### 📌 Examples of events:
- A user clicks a button
- A web page finishes loading
- A key is pressed
- The mouse hovers over an element

Events allow developers to make websites **interactive**.

---

## 🔹 Important Concepts Related to Events

### 1. Event Handling

**Event handling** is the process of executing code in response to an event.

```javascript
function showMessage() {
  alert("Button clicked!");
}
document.getElementById("myBtn").onclick = showMessage;
```


### 2.Event Listeners

**Event listeners** addEventListener() is used to listen for events in a flexible way.

### Syntax
```javascript
element.addEventListener(event, function, useCapture);
```

```javascript
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello from event listener!");
});
```
### 📌 Examples of Event Listeners:
- Add multiple listeners to the same event
- Remove listeners when needed



### 3.Event Objects

**Event objects** The event object contains information about the event.

```javascript
document.getElementById("myBtn").addEventListener("click", function(event) {
  console.log("Event type: " + event.type);
  console.log("Clicked element ID: " + event.target.id);
});
```

### 3.Event Propagation

**Event Propagation**  When an event occurs, it doesn’t just affect the target element—it can bubble up or capture down the DOM tree.

#### a.Event Bubbling (Default) 
- The event is first triggered on the target element, then bubbles up to its ancestors.

#### b.Event Capturing (Rarely Used) 
- The event starts from the root and is captured down to the target.

### 📌 Examples of Event Propagation:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

`Output if button is clicked`

Child clicked

Parent clicked

**Use event.stopPropagation() to stop bubbling**



## 🔹 Common JavaScript Events and Their Usage

| Event Type  | Description                    | Example                                 |
|-------------|--------------------------------|-----------------------------------------|
| `click`     | User clicks an element         | `button.addEventListener('click', ...)` |
| `mouseover` | Mouse hovers over an element   | `element.onmouseover = ...`             |
| `keydown`   | A key is pressed               | `document.addEventListener('keydown', ...)` |
| `submit`    | A form is submitted            | `form.addEventListener('submit', ...)`  |
| `load`      | Page or image is loaded        | `window.onload = ...`                   |
| `change`    | Input value changes            | `input.addEventListener('change', ...)` |




## 🔹 JavaScript Event Handling Methods

JavaScript ke andar jitne bhi events hote hain, wo **sequentially** (in order) run hote hain. Lekin kuch exceptions hoti hain — jaise **event propagation** (bubbling and capturing phases).

---

### ✅ Ways to Add Event Listeners in JavaScript

#### 1. Inline Event Handler

```html
<img src="https://images.pexels.com/photos/34950/pexels-photo.jpg" alt="Owl" onclick="alert('owl clicked')" />
```

#### 2. Using onclick Property

```javascript
document.getElementById('owl').onclick = function(){
    alert("owl clicked");
};
```

#### 3. Using addEventListener (Anonymous Function)

```javascript
document.getElementById('owl').addEventListener('click', function(){
    alert("owl clicked");
}, false);
```

#### 4. Using addEventListener (Named Function)

```javascript
function myFunction(){
    alert("owl clicked");
}
document.getElementById('owl').addEventListener('click', myFunction, false);
```


**⚠️ Note: attachEvent() was used in older versions of Internet Explorer and is now obsolete. Always prefer addEventListener().**









## 🔹 Frequently Asked Interview Questions

### 1. What is the difference between `onclick` and `addEventListener()`?

- `onclick` replaces any existing event handler.
- `addEventListener()` allows multiple listeners and supports advanced features like capturing, once, and removal.

---

### 2. What is event bubbling and how can you stop it?

- **Event bubbling** means the event propagates from the target element up through its ancestors in the DOM.
- Use `event.stopPropagation()` to stop the event from bubbling up.

---

### 3. What is the event object in JavaScript?

- It is an object that is automatically passed to event handlers.
- Contains details about the event like:
  - `type` – the type of event
  - `target` – the element that triggered the event
  - `timeStamp`, `key`, `clientX`, etc.

---

### 4. How to remove an event listener?

You must pass the **exact same function reference** when removing a listener.

```javascript
function greet() {
  alert("Hello!");
}

const btn = document.getElementById("myBtn");

// Add the listener
btn.addEventListener("click", greet);

// Remove the listener
btn.removeEventListener("click", greet);
```



> 🔁 **Summary**: `addEventListener` is the most flexible and widely-used way to handle events in modern JavaScript. It supports multiple listeners and event propagation control.

