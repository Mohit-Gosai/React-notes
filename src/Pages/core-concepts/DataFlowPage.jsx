export default function DataFlowPage() {
  return (
    <div className="page">
      <h1>Data Flow & Two-Way Binding</h1>

      <p>
        React follows a <strong>one-way data flow</strong> model. This means data
        flows in a single direction: from parent components to child components.
      </p>

      <hr />

      <section>
        <h2>What is One-Way Data Flow?</h2>

        <p>
          In React, data is passed down to components using props. Child
          components cannot directly modify the data they receive.
        </p>

        <pre>
          <code>
{`function Parent() {
  const name = "React";
  return <Child name={name} />;
}`}
          </code>
        </pre>

        <p>
          This makes applications predictable and easier to debug.
        </p>
      </section>

      <hr />

      <section>
        <h2>Does React Support Two-Way Binding?</h2>

        <p>
          React does not have true two-way data binding like some other
          frameworks. Instead, React uses controlled components to achieve
          similar behavior.
        </p>
      </section>

      <hr />

      <section>
        <h2>Controlled Components</h2>

        <p>
          In controlled components, form input values are controlled by React
          state. When the user types, the state updates, and the UI re-renders.
        </p>

        <pre>
          <code>
{`function InputExample() {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
          </code>
        </pre>

        <p>
          This creates a predictable data flow while still reacting to user
          input.
        </p>
      </section>

      <hr />

      <section>
        <h2>Why React Avoids Two-Way Binding</h2>

        <ul>
          <li>Clear data ownership</li>
          <li>Better performance</li>
          <li>Easier debugging</li>
          <li>More predictable UI updates</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>React uses one-way data flow</li>
          <li>Two-way binding is simulated using state</li>
          <li>Controlled components are the standard approach</li>
        </ul>
      </section>
    </div>
  );
}
