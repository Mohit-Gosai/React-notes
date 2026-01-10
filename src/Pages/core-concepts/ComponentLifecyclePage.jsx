export default function ComponentLifecyclePage() {
  return (
    <div className="page">
      <h1>Component Lifecycle</h1>

      <p>
        The component lifecycle describes the different phases a React component
        goes through from creation to removal. Understanding this helps you know
        when to run code such as data fetching, subscriptions, or cleanup.
      </p>

      <hr />

      <section>
        <h2>What Is a Component Lifecycle?</h2>

        <p>
          Every React component follows a lifecycle that consists of distinct
          stages. These stages determine when a component is created, updated,
          and destroyed.
        </p>

        <p>
          In modern React, lifecycle behavior is handled using hooks instead of
          class-based lifecycle methods.
        </p>
      </section>

      <hr />

      <section>
        <h2>Lifecycle Phases</h2>

        <h4>1. Mounting</h4>
        <p>
          This phase occurs when a component is created and added to the DOM.
        </p>
        <ul>
          <li>Component is rendered for the first time</li>
          <li>Side effects such as API calls can be performed</li>
        </ul>

        <h4>2. Updating</h4>
        <p>
          This phase occurs when a component re-renders due to changes in state
          or props.
        </p>
        <ul>
          <li>Triggered by state updates</li>
          <li>Triggered by receiving new props</li>
        </ul>

        <h4>3. Unmounting</h4>
        <p>
          This phase occurs when a component is removed from the DOM.
        </p>
        <ul>
          <li>Cleanup tasks are performed</li>
          <li>Event listeners and subscriptions are removed</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Lifecycle with Hooks</h2>

        <p>
          React hooks provide a unified way to handle lifecycle behavior using
          the <code>useEffect</code> hook.
        </p>

        <h4>Component Did Mount</h4>
        <pre>
          <code>
{`useEffect(() => {
  // runs once when component mounts
}, []);`}
          </code>
        </pre>

        <h4>Component Did Update</h4>
        <pre>
          <code>
{`useEffect(() => {
  // runs when dependencies change
}, [dependency]);`}
          </code>
        </pre>

        <h4>Component Will Unmount</h4>
        <pre>
          <code>
{`useEffect(() => {
  return () => {
    // cleanup logic
  };
}, []);`}
          </code>
        </pre>
      </section>

      <hr />

      <section>
        <h2>Why Lifecycle Matters</h2>
        <ul>
          <li>Control when side effects run</li>
          <li>Prevent memory leaks</li>
          <li>Improve performance</li>
          <li>Write predictable components</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Components go through mounting, updating, and unmounting</li>
          <li>Hooks replace class-based lifecycle methods</li>
          <li>useEffect is the core lifecycle hook</li>
        </ul>
      </section>
    </div>
  );
}
