import { useEffect, useState } from "react";

export default function HooksThemeToggleProject() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="project-card">
      <h3>Mini Project: Theme Toggle Using Hooks</h3>

      <p>
        <strong>Purpose:</strong> This project demonstrates how React hooks can
        be used to manage state and perform side effects in a component.
      </p>

      <h4>What this project demonstrates</h4>
      <ul>
        <li>Using the useState hook for state management</li>
        <li>Using the useEffect hook for side effects</li>
        <li>Reacting to state changes</li>
      </ul>

      <h4>Steps to build this project</h4>
      <ol>
        <li>Create a state variable for theme</li>
        <li>Toggle the state using a button</li>
        <li>Use useEffect to react to theme changes</li>
        <li>Apply changes outside the component</li>
      </ol>

      <h4>Live Preview</h4>
      <div className="project-preview">
        <p>Current Theme: {theme}</p>
        <button
          className="demo-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          Toggle Theme
        </button>
      </div>

      <h4>Source Code</h4>
      <pre>
        <code>
{`import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(
        theme === "light" ? "dark" : "light"
      )}>
        Toggle Theme
      </button>
    </>
  );
}

export default ThemeToggle;`}
        </code>
      </pre>
    </div>
  );
}
