export default function StateVsPropsPage() {
  return (
    <div className="page">
      <h1>State vs Props</h1>

      <p>
        State and props are the two core ways data is handled in React. Although
        they may look similar, they serve very different purposes and have
        different responsibilities.
      </p>

      <hr />

      <section>
        <h2>What Are Props?</h2>

        <p>
          Props (short for properties) are used to pass data from a parent
          component to a child component. Props are read-only and should never
          be modified by the receiving component.
        </p>

        <pre>
          <code>
{`function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return <Greeting name="React" />;
}`}
          </code>
        </pre>

        <p>
          Props make components reusable and configurable.
        </p>
      </section>

      <hr />

      <section>
        <h2>What Is State?</h2>

        <p>
          State is data that belongs to a component and can change over time.
          When state changes, the component automatically re-renders.
        </p>

        <pre>
          <code>
{`function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}`}
          </code>
        </pre>

        <p>
          State is managed inside the component where it is defined.
        </p>
      </section>

      <hr />

      <section>
        <h2>Key Differences</h2>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Passed from parent</td>
              <td>Managed within the component</td>
            </tr>
            <tr>
              <td>Read-only</td>
              <td>Can be updated</td>
            </tr>
            <tr>
              <td>Makes components reusable</td>
              <td>Makes components interactive</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Data Ownership</h2>

        <p>
          The component that owns the state is responsible for updating it. If
          multiple components need the same data, the state should be lifted to
          their closest common parent.
        </p>

        <pre>
          <code>
{`function Parent() {
  const [value, setValue] = useState("");

  return <Child value={value} />;
}`}
          </code>
        </pre>
      </section>

      <hr />

      <section>
        <h2>When to Use Props vs State</h2>

        <ul>
          <li>Use props to pass data down</li>
          <li>Use state for data that changes</li>
          <li>Lift state when multiple components need it</li>
          <li>Never modify props directly</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Common Mistakes</h2>

        <ul>
          <li>Trying to update props</li>
          <li>Duplicating state unnecessarily</li>
          <li>Keeping state too deep in the tree</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Props are for communication</li>
          <li>State is for control</li>
          <li>Data flows down, actions flow up</li>
        </ul>
      </section>
    </div>
  );
}
