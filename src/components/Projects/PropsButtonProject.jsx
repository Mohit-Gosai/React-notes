export default function PropsButtonProject() {
  return (
    <div className="project-card">
      <h3>Mini Project: Custom Button Using Props</h3>

      <p>
        <strong>Purpose:</strong> This project demonstrates how props allow data
        to be passed from a parent component to a child component.
      </p>

      <h4>What this project demonstrates</h4>
      <ul>
        <li>Passing data to components using props</li>
        <li>Making components configurable</li>
        <li>Reusing the same component with different values</li>
      </ul>

      <h4>Steps to build this project</h4>
      <ol>
        <li>Create a Button component that accepts props</li>
        <li>Use props to customize text</li>
        <li>Reuse the component with different values</li>
      </ol>

      <h4>Live Preview</h4>
      <div className="project-preview">
        <button className="demo-btn">Save</button>
        <button className="demo-btn">Login</button>
        <button className="demo-btn">Logout</button>
      </div>

      <h4>Source Code</h4>
      <pre>
        <code>
{`function Button({ label }) {
  return <button className="demo-btn">{label}</button>;
}

export default function App() {
  return (
    <>
      <Button label="Save" />
      <Button label="Login" />
      <Button label="Logout" />
    </>
  );
}`}
        </code>
      </pre>
    </div>
  );
}
