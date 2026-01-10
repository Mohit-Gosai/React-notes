import { useState, useEffect } from "react";
import HooksThemeToggleProject from "../components/Projects/HooksThemeTogleProject";
export default function HooksPage() {
  return (
    <>
      <h2>Hooks</h2>

      <p>
        <strong>Hooks</strong> are special functions in React that allow you to
        use state and other React features inside functional components.
      </p>

      <p>
        Hooks were introduced in React 16.8 to replace the need for class
        components in most cases.
      </p>

      <h3>Why Hooks?</h3>
      <ul>
        <li>Allow state in functional components</li>
        <li>Make code cleaner and reusable</li>
        <li>Avoid complex class components</li>
      </ul>

      <h3>Rules of Hooks</h3>
      <ul>
        <li>Only call hooks at the top level</li>
        <li>Only call hooks inside React components</li>
        <li>Do not call hooks inside loops or conditions</li>
      </ul>

      <h3>useState (Recap)</h3>
      <p>
        The <code>useState</code> hook lets you add state to a component.
      </p>

      <pre>
        <code>
{`const [count, setCount] = useState(0);`}
        </code>
      </pre>

      <h3>useEffect</h3>
      <p>
        The <code>useEffect</code> hook is used to perform side effects in a
        component, such as fetching data, updating the DOM, or setting timers.
      </p>

      <h3>useEffect Example</h3>
      <pre>
        <code>
{`useEffect(() => {
  console.log("Component Mounted");
}, []);`}
        </code>
      </pre>

      <h3>Dependency Array</h3>
      <p>
        The dependency array controls when the effect runs.
      </p>

      <ul>
        <li><code>[]</code> → Runs once on mount</li>
        <li><code>[count]</code> → Runs when count changes</li>
        <li>No array → Runs on every render</li>
      </ul>

      <pre>
        <code>
{`useEffect(() => {
  document.title = count;
}, [count]);`}
        </code>
      </pre>

      <h3>Cleanup Function</h3>
      <p>
        Effects can return a cleanup function to remove side effects when the
        component unmounts.
      </p>

      <pre>
        <code>
{`useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);`}
        </code>
      </pre>

      <h3>Common Hooks</h3>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useRef</li>
      </ul>

      <h3>When to Use Hooks</h3>
      <ul>
        <li>Managing state</li>
        <li>Handling lifecycle logic</li>
        <li>Sharing logic between components</li>
      </ul>

      <h3>Common Mistakes</h3>
      <ul>
        <li>Calling hooks conditionally</li>
        <li>Forgetting dependency arrays</li>
        <li>Overusing useEffect</li>
      </ul>
      <HooksThemeToggleProject/>
    </>
  );
}
