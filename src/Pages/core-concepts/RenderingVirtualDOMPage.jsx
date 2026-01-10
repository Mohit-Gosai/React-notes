export default function RenderingVirtualDOMPage() {
  return (
    <div className="page">
      <h1>Rendering & Virtual DOM</h1>

      <p>
        Rendering in React is the process of converting components into UI
        elements on the screen. React uses a Virtual DOM to efficiently update
        the real DOM when changes occur.
      </p>

      <hr />

      <section>
        <h2>What Is Rendering?</h2>

        <p>
          When a React component renders, it returns JSX. React then converts
          this JSX into JavaScript objects that represent the UI structure.
        </p>

        <p>
          Rendering does not always mean updating the real DOM. React decides
          what actually needs to change.
        </p>
      </section>

      <hr />

      <section>
        <h2>What Is the Virtual DOM?</h2>

        <p>
          The Virtual DOM is an in-memory representation of the real DOM. It
          allows React to calculate changes before updating the browser.
        </p>

        <ul>
          <li>Lightweight JavaScript object</li>
          <li>Faster than direct DOM manipulation</li>
          <li>Improves performance</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>How React Updates the UI</h2>

        <ol>
          <li>A state or prop changes</li>
          <li>The component re-renders</li>
          <li>A new Virtual DOM is created</li>
          <li>React compares old and new Virtual DOM (diffing)</li>
          <li>Only the necessary DOM updates are applied</li>
        </ol>
      </section>

      <hr />

      <section>
        <h2>Reconciliation</h2>

        <p>
          Reconciliation is the process React uses to compare the previous
          Virtual DOM with the new one to determine the minimum number of
          changes required.
        </p>

        <p>
          Keys play an important role during reconciliation when rendering
          lists.
        </p>
      </section>

      <hr />

      <section>
        <h2>Why Keys Matter</h2>

        <p>
          Keys help React identify which elements have changed, been added, or
          removed when rendering lists.
        </p>

        <pre>
          <code>
{`items.map(item => (
  <li key={item.id}>{item.name}</li>
))`}
          </code>
        </pre>

        <p>
          Without keys, React may re-render more elements than necessary.
        </p>
      </section>

      <hr />

      <section>
        <h2>Common Misconceptions</h2>

        <ul>
          <li>Re-rendering always means DOM updates (false)</li>
          <li>Virtual DOM replaces the real DOM (false)</li>
          <li>React re-renders everything on every change (false)</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Rendering creates UI descriptions</li>
          <li>Virtual DOM optimizes DOM updates</li>
          <li>Reconciliation minimizes changes</li>
          <li>Keys improve list performance</li>
        </ul>
      </section>
    </div>
  );
}
