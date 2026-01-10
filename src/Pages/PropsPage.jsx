import PropsButtonProject from "../components/Projects/PropsButtonProject";
export default function PropsPage() {
  return (
    <>
      <h2>Props</h2>

      <p>
        <strong>Props</strong> (short for properties) are used to pass data from
        one component to another. Props allow components to be dynamic and
        reusable.
      </p>

      <p>
        Props are passed from a <strong>parent component</strong> to a{" "}
        <strong>child component</strong>.
      </p>

      <h3>Why Props?</h3>
      <ul>
        <li>To pass data between components</li>
        <li>To make components reusable</li>
        <li>To customize component behavior</li>
      </ul>

      <h3>Passing Props</h3>
      <p>
        Props are passed to components like HTML attributes.
      </p>

      <pre>
        <code>
{`function App() {
  return <Greeting name="Mohit" />;
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>

      <h3>Receiving Props</h3>
      <p>
        Props are received as a function parameter inside the component.
      </p>

      <pre>
        <code>
{`function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>

      <h3>Props Destructuring</h3>
      <p>
        Destructuring makes props easier to read and use.
      </p>

      <pre>
        <code>
{`function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}`}
        </code>
      </pre>

      <h3>Passing Multiple Props</h3>
      <pre>
        <code>
{`function App() {
  return <User name="Mohit" age={22} />;
}

function User({ name, age }) {
  return <p>{name} is {age} years old</p>;
}`}
        </code>
      </pre>

      <h3>Props Are Read-Only</h3>
      <p>
        Props cannot be modified by the child component. They are{" "}
        <strong>immutable</strong>.
      </p>

      <pre>
        <code>
{`// ❌ This is wrong
props.name = "New Name";`}
        </code>
      </pre>

      <h3>Props vs State</h3>
      <ul>
        <li>Props are passed from parent to child</li>
        <li>State is managed inside the component</li>
        <li>Props are read-only</li>
        <li>State can be changed</li>
      </ul>

      <h3>Default Props (Optional)</h3>
      <pre>
        <code>
{`function Button({ text = "Click" }) {
  return <button>{text}</button>;
}`}
        </code>
      </pre>

      <h3>When to Use Props</h3>
      <ul>
        <li>When data comes from outside the component</li>
        <li>When the same component needs different data</li>
        <li>When passing configuration or callbacks</li>
      </ul>
      <PropsButtonProject />
    </>
  );
}
