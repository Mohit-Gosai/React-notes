import ReusableButtonProject from "../components/Projects/ReusableButtonProject";
export default function ComponentsPage() {
  return (
    <>
      <h2>Components</h2>

      <p>
        Components are the <strong>building blocks of a React application</strong>.
        A component represents a reusable piece of the user interface.
      </p>

      <p>
        Instead of writing the entire UI in one file, React allows you to break
        the UI into small, independent, and reusable components.
      </p>

      <h3>Types of Components</h3>
      <ul>
        <li><strong>Functional Components</strong> (Recommended)</li>
        <li>Class Components (Older approach)</li>
      </ul>

      <h3>Functional Component Example</h3>
      <p>
        A functional component is a JavaScript function that returns JSX.
      </p>

      <pre>
        <code>
{`function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;`}
        </code>
      </pre>

      <h3>Component Naming Rules</h3>
      <ul>
        <li>Component names must start with a capital letter</li>
        <li>Lowercase names are treated as HTML elements</li>
        <li>One component per file is recommended</li>
      </ul>

      <h3>Reusing Components</h3>
      <p>
        One of the biggest advantages of components is reusability. The same
        component can be used multiple times in different parts of the app.
      </p>

      <pre>
        <code>
{`function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}`}
        </code>
      </pre>

      <h3>Component Composition</h3>
      <p>
        Components can be combined together to build complex UIs. This concept
        is known as <strong>component composition</strong>.
      </p>

      <pre>
        <code>
{`function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <p>© 2026</p>;
}

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}`}
        </code>
      </pre>

      <h3>Why Use Components?</h3>
      <ul>
        <li>Improves code readability</li>
        <li>Makes UI easier to maintain</li>
        <li>Encourages reuse</li>
        <li>Helps in scaling applications</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Keep components small and focused</li>
        <li>Use meaningful component names</li>
        <li>Avoid too much logic inside UI components</li>
      </ul>
        <ReusableButtonProject />      
    </>
  );
}
