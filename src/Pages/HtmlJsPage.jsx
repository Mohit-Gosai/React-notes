import JsxGreetingProject from "../components/Projects/JsxGreatingProject.jsx";
export default function JsxPage() {
  return (
    <>
      <h2>JSX</h2>

      <p>
        JSX stands for <strong>JavaScript XML</strong>. It allows us to write
        HTML-like syntax directly inside JavaScript. JSX makes React code easier
        to read and understand.
      </p>

      <h3>Why JSX?</h3>
      <ul>
        <li>Makes UI code more readable</li>
        <li>Allows combining logic and markup</li>
        <li>Prevents repetitive DOM manipulation</li>
      </ul>

      <h3>JSX Example</h3>
      <p>
        Below is a simple JSX example where JavaScript variables are used inside
        HTML using curly braces:
      </p>

      <pre>
        <code>
{`const name = "Mohit";

function Welcome() {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`}
        </code>
      </pre>

      <h3>JSX Expressions</h3>
      <p>
        Any valid JavaScript expression can be used inside JSX by wrapping it
        in curly braces <strong>{`{}`}</strong>.
      </p>

      <pre>
        <code>
{`const age = 20;

<h2>You are {age} years old</h2>`}
        </code>
      </pre>

      <h3>JSX Rules</h3>
      <ul>
        <li>JSX must return a single parent element</li>
        <li>All tags must be properly closed</li>
        <li>Use <code>className</code> instead of <code>class</code></li>
        <li>Use camelCase for attributes</li>
      </ul>

      <h3>Single Parent Rule</h3>
      <p>
        JSX cannot return multiple elements at the same level. You must wrap
        them inside a parent element or React Fragment.
      </p>

      <pre>
        <code>
{`return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);`}
        </code>
      </pre>

      <h3>JSX vs HTML</h3>
      <ul>
        <li><code>class</code> → <code>className</code></li>
        <li><code>for</code> → <code>htmlFor</code></li>
        <li>Inline styles are objects</li>
      </ul>

      <pre>
        <code>
{`<h1 style={{ color: "cyan", fontSize: "24px" }}>
  Styled Text
</h1>`}
        </code>
      </pre>

      <h3>Is JSX Required?</h3>
      <p>
        No, JSX is not mandatory. React can be written using plain JavaScript,
        but JSX makes the code much cleaner and easier to maintain.
      </p>
      <JsxGreetingProject /> 
    </>
  );
}
