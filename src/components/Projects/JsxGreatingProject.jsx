export default function JsxGreetingProject() {
  const name = "Mohit";

  return (
    <div className="project-card">
      <h3>Mini Project: Dynamic Greeting App</h3>

      <p>
        <strong>Purpose:</strong> This project demonstrates how JSX allows
        JavaScript expressions to be embedded directly inside HTML-like syntax.
      </p>

      <h4>What this project demonstrates</h4>
      <ul>
        <li>Using JavaScript variables inside JSX</li>
        <li>JSX expressions with curly braces</li>
        <li>Dynamic content rendering</li>
      </ul>

      <h4>Steps to build this project</h4>
      <ol>
        <li>Create a React component</li>
        <li>Define a JavaScript variable</li>
        <li>Use the variable inside JSX using curly braces</li>
        <li>Render dynamic text on the screen</li>
      </ol>

      <h4>Live Preview</h4>
      <div className="project-preview">
        <h1>Hello, {name} 👋</h1>
        <p>Welcome to the JSX mini project</p>
      </div>

      <h4>Source Code</h4>
      <pre>
        <code>
{`const name = "Mohit";

function Greeting() {
  return (
    <div>
      <h1>Hello, {name} 👋</h1>
      <p>Welcome to the JSX mini project</p>
    </div>
  );
}

export default Greeting;`}
        </code>
      </pre>
    </div>
  );
}
