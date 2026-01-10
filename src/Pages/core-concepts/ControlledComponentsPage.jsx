export default function ControlledComponentsPage() {
  return (
    <div className="page">
      <h1>Controlled vs Uncontrolled Components</h1>

      <p>
        Forms and input elements in React can be handled in two different ways:
        controlled components and uncontrolled components. Understanding the
        difference helps in building predictable and maintainable forms.
      </p>

      <hr />

      <section>
        <h2>What Are Controlled Components?</h2>

        <p>
          In controlled components, form input values are fully controlled by
          React state. Every change to the input updates the state, and the state
          determines what is displayed.
        </p>

        <pre>
          <code>
{`function ControlledInput() {
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

        <ul>
          <li>Single source of truth</li>
          <li>Easy validation</li>
          <li>Predictable behavior</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>What Are Uncontrolled Components?</h2>

        <p>
          In uncontrolled components, form data is handled by the DOM itself
          instead of React state. React accesses the value using refs.
        </p>

        <pre>
          <code>
{`function UncontrolledInput() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>
        Submit
      </button>
    </>
  );
}`}
          </code>
        </pre>

        <ul>
          <li>Less code</li>
          <li>Direct DOM access</li>
          <li>Harder to validate</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Differences</h2>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Controlled</th>
              <th>Uncontrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uses React state</td>
              <td>Uses DOM refs</td>
            </tr>
            <tr>
              <td>Single source of truth</td>
              <td>DOM manages state</td>
            </tr>
            <tr>
              <td>Easy validation</td>
              <td>Manual validation</td>
            </tr>
            <tr>
              <td>Recommended for most cases</td>
              <td>Useful for simple or legacy forms</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>When to Use Each</h2>

        <ul>
          <li>Use controlled components for most forms</li>
          <li>Use uncontrolled components for quick inputs</li>
          <li>Avoid mixing both approaches in the same input</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Controlled components follow React’s data flow</li>
          <li>Uncontrolled components rely on the DOM</li>
          <li>Controlled components are more predictable</li>
        </ul>
      </section>
    </div>
  );
}
