# **🔹 useState in React.js**  

## **✅ What is `useState`?**  
`useState` is a **React Hook** that allows you to **manage state** in **functional components**.  
It lets components store, update, and track data without using class components.

---

## **📌 Syntax**  
```jsx
const [state, setState] = useState(initialValue);
```
- `state` → The current value of the state.
- `setState` → A function to update the state.
- `initialValue` → The starting value of the state.

---

## **🌟 Example 1: Counter with `useState`**
```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
```

### **📌 How It Works**
1. `useState(0)` initializes `count` with `0`.
2. Clicking **"Increment"** updates `count` by calling `setCount(count + 1)`.
3. React **re-renders** the component with the updated `count`.

---

## **🌟 Example 2: Handling Form Input with `useState`**
```jsx
import React, { useState } from "react";

const FormExample = () => {
  const [name, setName] = useState(""); // State for name input

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="mt-2">Hello, {name}!</p>
    </div>
  );
};

export default FormExample;
```

### **📌 How It Works**
1. `useState("")` initializes `name` as an empty string.
2. Typing in the input field updates the `name` state via `setName(e.target.value)`.
3. React re-renders the component to display `Hello, {name}!`.

---

## **🔹 Rules of `useState`**
✅ **Must be inside a function component**  
❌ Cannot be used inside loops or conditions  
✅ **State updates are asynchronous**  

Example (Incorrect Usage):
```jsx
if (true) {
  const [count, setCount] = useState(0); // ❌ Wrong! Hooks must be at the top level
}
```

---

## **🚀 Conclusion**
- `useState` is the simplest way to manage state in **functional components**.
- It **triggers re-renders** when the state changes.
- Works great for **counters, forms, toggles, and UI state management**.

Would you like more examples? Let me know! 🚀  
[Click here to access our prompt library!](https://ko-fi.com/s/277d07bae3)