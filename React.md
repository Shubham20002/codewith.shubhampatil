# React Interview Questions & Answers

## Table of Contents

Priority: ⭐⭐⭐ = must-know / asked very often · ⭐⭐ = commonly asked · ⭐ = good to know / asked less often

| No. | Priority | Topic                    | Question                                                    |
| :-: | :-: | ------------------------ | ------------------------------------------------------------ |
|  1  | ⭐⭐⭐ | Basics              | [What is React?](#what-is-react)       |
|  2  | ⭐⭐⭐ | Basics              | [What are the Advantages and Disadvantages of React?](#what-are-the-advantages-and-disadvantages-of-react)       |
|  3  | ⭐⭐⭐ | Basics              | [What is the difference between SPA and MPA?](#what-is-the-difference-between-spa-and-mpa)       |
|  4  | ⭐⭐ | Basics              | [How is React Declarative?](#how-is-react-declarative)       |
|  5  | ⭐⭐⭐ | Virtual DOM              | [What is Virtual DOM?](#what-is-virtual-dom)       |
|  6  | ⭐⭐ | Tooling              | [What are Babel and Webpack?](#what-are-babel-and-webpack)       |
|  7  | ⭐⭐ | JSX              | [What is a React Fragment?](#what-is-a-react-fragment)       |
|  8  | ⭐⭐⭐ | Props              | [What are Props?](#what-are-props)       |
|  9  | ⭐⭐⭐ | Lifecycle              | [What are React Lifecycle Methods?](#what-are-react-lifecycle-methods)       |
| 10  | ⭐⭐⭐ | Hooks              | [What are Hooks?](#what-are-hooks)       |
| 11  | ⭐⭐⭐ | Hooks              | [What are the Rules of Hooks?](#what-are-the-rules-of-hooks)       |
| 12  | ⭐⭐⭐ | Hooks              | [What is useState?](#what-is-usestate)       |
| 13  | ⭐⭐⭐ | Hooks              | [What is useEffect?](#what-is-useeffect)       |
| 14  | ⭐⭐⭐ | Hooks              | [What is useRef?](#what-is-useref)       |
| 15  | ⭐⭐⭐ | Forms              | [What is the difference between Controlled and Uncontrolled Components?](#what-is-the-difference-between-controlled-and-uncontrolled-components)       |
| 16  | ⭐⭐⭐ | Virtual DOM              | [How does React Work?](#how-does-react-work)       |
| 17  | ⭐⭐⭐ | Performance              | [What are React Code Optimization Techniques?](#what-are-react-code-optimization-techniques)       |
| 18  | ⭐⭐⭐ | Lists              | [What is Key in React?](#what-is-key-in-react)       |
| 19  | ⭐⭐⭐ | JSX              | [What is JSX?](#what-is-jsx)       |
| 20  | ⭐⭐⭐ | State Management              | [What is Prop Drilling?](#what-is-prop-drilling)       |
| 21  | ⭐⭐⭐ | Performance              | [What is React.memo?](#what-is-reactmemo)       |
| 22  | ⭐⭐⭐ | Hooks              | [What is useMemo?](#what-is-usememo)       |
| 23  | ⭐⭐⭐ | Hooks              | [What is useCallback?](#what-is-usecallback)       |
| 24  | ⭐⭐ | Internals              | [What is React Fiber?](#what-is-react-fiber)       |
| 25  | ⭐⭐⭐ | Hooks              | [What is a Custom Hook?](#what-is-a-custom-hook)       |
| 26  | ⭐⭐ | Tooling              | [What is the difference between Webpack and Vite?](#what-is-the-difference-between-webpack-and-vite)       |
| 27  | ⭐⭐⭐ | Hooks              | [What is the difference between useState and useRef?](#what-is-the-difference-between-usestate-and-useref)       |
| 28  | ⭐⭐ | React 19              | [What are React 19 Features?](#what-are-react-19-features)       |
| 29  | ⭐⭐ | Performance              | [What is Virtualization?](#what-is-virtualization)       |
| 30  | ⭐⭐⭐ | Performance              | [What is Lazy Loading?](#what-is-lazy-loading)       |

### What is React?

React is a JavaScript library used to create user interfaces.

**[⬆ Back to Top](#table-of-contents)**

### What are the Advantages and Disadvantages of React?

Advantages

1. React is component-based, so code is reusable.
2. React helps us create single page applications.
3. React uses virtual DOM, so DOM manipulation is easy with React.
4. React is declarative — we define what we want, not how to produce a particular element.

Disadvantages

1. Due to being a single-page application, React is not good for SEO.
2. As the number of components increases, it becomes hard to understand.

**[⬆ Back to Top](#table-of-contents)**

### What is the difference between SPA and MPA?

**SPA (Single Page Application)**

- Loads the HTML, CSS, and JS once.
- On navigation, it fetches data via API calls and updates the DOM dynamically, so a full page refresh does not happen on every request.

**MPA (Multi Page Application)**

- Loads content fresh from the server for every request.
- Every page change causes a full (hard) page refresh.

**[⬆ Back to Top](#table-of-contents)**

### How is React Declarative?

In React, we tell it what we want the UI to look like, not how to produce it — unlike vanilla JavaScript, where we imperatively manipulate the DOM step by step using methods like `createElement` and `appendChild`.

**[⬆ Back to Top](#table-of-contents)**

### What is Virtual DOM?

Virtual DOM is a lightweight copy of the real DOM. Whenever we make changes in a React application, React first makes those changes in the virtual DOM.

React keeps the pre-update virtual DOM around, and during the reconciliation process, using a diffing algorithm, it finds the difference between the new virtual DOM and the pre-update virtual DOM. Only those changes are then applied to the real DOM, with the help of React DOM.

**[⬆ Back to Top](#table-of-contents)**

### What are Babel and Webpack?

**Babel** — A compiler/transpiler that converts JSX into React elements. These React elements are plain JS objects.

**Webpack** — A module bundler. It bundles everything before the dev server starts running, so the dev server can be slow to start.

**[⬆ Back to Top](#table-of-contents)**

### What is a React Fragment?

React does not allow returning multiple elements from a single component. To return multiple elements from a single component, we use React Fragment.

**[⬆ Back to Top](#table-of-contents)**

### What are Props?

Props are like inputs to a component. Props are used to pass data from a parent component to a child component.

**[⬆ Back to Top](#table-of-contents)**

### What are React Lifecycle Methods?

Every React component goes through 3 different phases: mounting, updating, and unmounting.

**Mounting**

- `constructor` — The first method to get called; here we initialize state.
- `getDerivedStateFromProps` — Syncs props up with state.
- `render` — Returns JSX to render to the DOM.
- `componentDidMount` — Called after the component mounts. Here we can perform side effects like API calls and DOM manipulation.

**Updating**

- `getDerivedStateFromProps` — Called on every re-render.
- `shouldComponentUpdate` — Here we decide whether the component should update or not.
- `render` — Called on every re-render.
- `getSnapshotBeforeUpdate` — Here we capture the DOM before it updates.
- `componentDidUpdate` — Called after the component updates and re-renders.

**Unmounting**

- `componentWillUnmount` — Called before the component gets unmounted. We use this method to clear timeouts and clean up effects.

**In function components**, lifecycle is handled by the `useEffect` hook. It takes two arguments: the first is a callback function, and the second is a dependency array. If a state mentioned in the dependency array changes, the callback gets executed again.

- With an empty dependency array, it works as `componentDidMount`.
- With state in the dependency array, it works as `componentDidMount` and `componentDidUpdate`.
- With a return function, it works as `componentWillUnmount`.
- Without a dependency array, it works as `componentDidMount` and `componentDidUpdate` on every render.

**[⬆ Back to Top](#table-of-contents)**

### What are Hooks?

Hooks are built-in functions in React which allow us to use state variables and perform side effects in function-based components.

**[⬆ Back to Top](#table-of-contents)**

### What are the Rules of Hooks?

1. We can use hooks only at the top of the component, not inside a loop or condition.
2. We can use hooks only inside function-based components, not in class-based components.

**[⬆ Back to Top](#table-of-contents)**

### What is useState?

`useState` is a built-in React hook which allows us to use a state variable in function-based components.

It returns a tuple, out of which the first is the current variable value and the second is a function to update the current variable's value.

**[⬆ Back to Top](#table-of-contents)**

### What is useEffect?

`useEffect` is a built-in React hook which allows us to perform side effects in function-based components.

It takes 2 arguments: the first is a callback function, and the second is a dependency array. If a state mentioned in the dependency array changes, the callback function gets executed.

- With an empty dependency array, it works as `componentDidMount`.
- With state mentioned in the dependency array, it works as `componentDidMount` and `componentDidUpdate`.
- With a return function, it works as `componentWillUnmount`.
- Without a dependency array, it works as `componentDidMount` and `componentDidUpdate` on every render.

`useEffect` is used for API calls, DOM manipulation, etc.

**[⬆ Back to Top](#table-of-contents)**

### What is useRef?

`useRef` is a built-in React hook which lets us access and store a value without causing a component re-render.

It's used, for example, when we want to validate user input only once — when the user submits the form — not on every keypress.

```jsx
let inputRef = useRef();
<input type="text" ref={inputRef} />
```

**[⬆ Back to Top](#table-of-contents)**

### What is the difference between Controlled and Uncontrolled Components?

**Controlled** — The input element is controlled by React (its value comes from state).

```jsx
function ControlledInput() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

**Uncontrolled** — The input element is controlled by the DOM (its value is read via a ref).

```jsx
function UncontrolledInput() {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return <input ref={inputRef} />;
}
```

**[⬆ Back to Top](#table-of-contents)**

### How does React Work?

1. We write JSX. Babel converts JSX into React elements — these React elements are plain JS objects.
2. With these objects, React updates the virtual DOM.
3. During the reconciliation process, using a diffing algorithm, React finds the difference between the virtual DOM and the pre-updated virtual DOM.
4. Finally, with React DOM, React applies those changes to the real DOM.

**[⬆ Back to Top](#table-of-contents)**

### What are React Code Optimization Techniques?

1. We can use `React.memo` to avoid component re-render when props don't change.
2. We can use `useMemo` to memoize computed values, and `useCallback` to memoize function references.
3. Use code splitting / lazy loading.
4. Avoid inline functions — with every re-render, it creates a new function reference.
5. Use React Profiler to check which component is rendering again and again.
6. Use debounce and throttle.
7. Use a custom hook to consume Context API, when we are using `useContext`.

**[⬆ Back to Top](#table-of-contents)**

### What is Key in React?

Key is a special string attribute. It helps us identify each element uniquely, and also helps React understand which elements were added, deleted, or updated.

**[⬆ Back to Top](#table-of-contents)**


### What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript.

**[⬆ Back to Top](#table-of-contents)**

### What is Prop Drilling?

When we want to pass data from a component that is higher in the hierarchy to a deeply nested component, we pass data through multiple nested components. Passing data through multiple in-between components like this is called prop drilling.

**[⬆ Back to Top](#table-of-contents)**
### What is React.memo?

`React.memo` is a higher order component. It wraps the component and tells React to re-render it only when its props change.

Generally, what happens is if a parent component re-renders, the child component also re-renders — to avoid this, we use `React.memo`.

```jsx
import { useState, memo } from 'react';

const Child = memo(({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
      <Child name="John" />
    </>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

### What is useMemo?

`useMemo` is a built-in React hook that allows us to memoize a computed value. It recalculates only when a dependency mentioned in the dependency array changes.

It's used to avoid expensive recalculation on every re-render.

```jsx
import { useState, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => count * 2, [count]);

  return (
    <>
      <h1>{count}</h1>
      <h1>double={double}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
    </>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

### What is useCallback?

`useCallback` is a built-in React hook which helps to memoize a function reference. It returns the same function reference until a dependency mentioned in the dependency array changes.

```jsx
import { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const double = useMemo(() => count * 2, [count]);

  const printCount = useCallback(() => {
    console.log(`count is ${count}`);
  }, [count]);

  useEffect(() => {
    printCount();
  }, [printCount]);

  return (
    <>
      <h1>{count}</h1>
      <h1>double={double}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

### What is React Fiber?

React Fiber is the internal engine behind React 16 and later. It makes rendering asynchronous, so React can pause, resume, and prioritize updates, giving smooth performance and a better UX.

Before this, React updated the UI synchronously — all rendering happened at once, which blocked the main thread.

**[⬆ Back to Top](#table-of-contents)**

### What is a Custom Hook?

A custom hook is a normal JS function. It extracts reusable code from a component.

- A custom hook's name must start with `use`.
- A custom hook can use React hooks inside it.
- It does not return JSX — it returns a function or a value.

```jsx
// useApi.js
import { useState, useEffect } from 'react';

export default function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

```jsx
// App.js
import useApi from './useApi';

export default function App() {
  const { data, loading } = useApi('https://abc.com');

  return <div>{loading ? 'Loading...' : JSON.stringify(data)}</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

### What is the difference between Webpack and Vite?

**Webpack** — A module bundler. It bundles everything before running, which makes development slow.

**Vite** — Uses native ES modules to start instantly, and bundles later for production, which makes it faster.

**[⬆ Back to Top](#table-of-contents)**

### What is the difference between useState and useRef?

| Aspect | useState | useRef |
| --- | --- | --- |
| Purpose | Used to store reactive state | Used to access and store a value without a component re-render |
| Re-render | When it changes, the component re-renders | Accessing or storing a value does not cause a component re-render |
| Use case | Used to track UI data — input value, counter | Used to access the DOM and store values without a component re-render |

**[⬆ Back to Top](#table-of-contents)**

### What are React 19 Features?

1. `useActionState` — used to handle form submissions; manages success, error, and loading automatically.
2. Stylesheets load before content shows, improving stylesheet performance.
3. Ref can be passed directly as a prop.

**[⬆ Back to Top](#table-of-contents)**

### What is Virtualization?

Virtualization is a performance optimization technique — it renders only the visible part of a large list and dynamically loads elements as the user scrolls.

`react-window` and `react-virtualized` are used to do this.

**[⬆ Back to Top](#table-of-contents)**

### What is Lazy Loading?

Lazy loading is a performance optimization technique.

- It loads content only when required.
- It improves initial load time.
- It gives a better UX.
- It uses the `Suspense` component.

**[⬆ Back to Top](#table-of-contents)**