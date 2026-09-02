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