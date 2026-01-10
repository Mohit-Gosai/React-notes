import { useState } from "react";

export default function StateCounterProject() {
  const [count, setCount] = useState(0);

  return (
    <div className="project-card">
      <h3>Mini Project: Counter App Using State</h3>

      <p>
        <strong>Purpose:</strong> This project demonstrates how state allows a
        component to manage and update dynamic data.
      </p>

      <h4>What this project demonstrates</h4>
      <ul>
        <li>Using the useState hook</li>
        <li>Updating UI based on state changes</li>
        <li>Handling user interactions</li>
      </ul>

      <h4>Steps to build this project</h4>
      <ol>
        <li>Import the useState hook</li>
        <li>Create a state variable</li>
        <li>Update state using event handlers</li>
        <li>Re-render UI automatically</li>
      </ol>

      <h4>Live Preview</h4>
      <div className="project-preview">
        <h1>{count}</h1>
        <div className="btn-group">
          <button className="demo-btn" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button
            className="demo-btn"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button className="demo-btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

      <h4>Source Code</h4>
      <pre>
        <code>
{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;`}
        </code>
      </pre>
    </div>
  );
}
