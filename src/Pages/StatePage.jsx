import { useState } from "react";
import StateCounterProject from "../components/Projects/StateCounterProject";
export default function StatePage() {
  return (
    <>
      <h2>State</h2>

      <p>
        <strong>State</strong> is used to store data that can change over time
        inside a component. When state changes, React automatically re-renders
        the component.
      </p>

      <p>
        State is managed within the component and is different from props,
        which are passed from parent to child.
      </p>

      <h3>Why State?</h3>
      <ul>
        <li>To handle dynamic data</li>
        <li>To respond to user interactions</li>
        <li>To update the UI automatically</li>
      </ul>

      <h3>useState Hook</h3>
      <p>
        React provides the <code>useState</code> hook to add state to functional
        components.
      </p>

      <pre>
        <code>
{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}`}
        </code>
      </pre>

      <h3>Updating State</h3>
      <p>
        State should never be modified directly. Instead, use the state update
        function.
      </p>

      <pre>
        <code>
{`// ❌ Wrong
count = count + 1;

// ✅ Correct
setCount(count + 1);`}
        </code>
      </pre>

      <h3>State with Events</h3>
      <p>
        State is commonly updated using event handlers like button clicks.
      </p>

      <pre>
        <code>
{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}`}
        </code>
      </pre>

      <h3>State is Asynchronous</h3>
      <p>
        State updates may not happen immediately. When updating based on the
        previous value, use the callback form.
      </p>

      <pre>
        <code>
{`setCount(prevCount => prevCount + 1);`}
        </code>
      </pre>

      <h3>Props vs State</h3>
      <ul>
        <li>Props are passed from parent to child</li>
        <li>State is managed within the component</li>
        <li>Props are read-only</li>
        <li>State can be updated</li>
      </ul>

      <h3>When to Use State</h3>
      <ul>
        <li>Form inputs</li>
        <li>Toggle buttons</li>
        <li>Counters</li>
        <li>Dynamic UI elements</li>
      </ul>

      <h3>Common Mistakes</h3>
      <ul>
        <li>Modifying state directly</li>
        <li>Using state when props are enough</li>
        <li>Overusing state unnecessarily</li>
      </ul>
      <StateCounterProject />
    </>
  );
}
