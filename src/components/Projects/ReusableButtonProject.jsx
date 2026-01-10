export default function ReusableButtonProject() {
  return (
    <div className="project-card">
      <h3>Mini Project: Reusable Button Component</h3>

      <p>
        <strong>Purpose:</strong> This project demonstrates how React components
        can be reused multiple times to create consistent UI elements.
      </p>

      <h4>What this project demonstrates</h4>
      <ul>
        <li>Creating a reusable React component</li>
        <li>Using the same component multiple times</li>
        <li>Component-based UI structure</li>
      </ul>

      <h4>Steps to build this project</h4>
      <ol>
        <li>Create a Button component</li>
        <li>Return JSX from the component</li>
        <li>Export the component</li>
        <li>Reuse the component multiple times</li>
      </ol>

      <h4>Live Preview</h4>
      <div className="project-preview">
        <button className="demo-btn">Save</button>
        <button className="demo-btn">Cancel</button>
        <button className="demo-btn">Delete</button>
      </div>

      <h4>Source Code</h4>
      <pre>
        <code>
{`function Button() {
  return <button className="demo-btn">Click Me</button>;
}

export default Button;`}
        </code>
      </pre>
    </div>
  );
}
