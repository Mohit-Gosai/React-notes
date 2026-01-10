export default function Introduction() {
  return (
    <>
      <h2>Introduction to React</h2>

      <p>
        React is a <strong>JavaScript library</strong> used to build fast,
        interactive, and reusable user interfaces. It is mainly used for
        creating <strong>Single Page Applications (SPAs)</strong>.
      </p>

      <p>
        React was created by Facebook and is now maintained by Meta and a large
        open-source community.
      </p>

      <h3>Why React?</h3>
      <ul>
        <li>Component-based architecture</li>
        <li>Fast rendering using Virtual DOM</li>
        <li>Reusable and maintainable code</li>
        <li>Strong community and ecosystem</li>
      </ul>

      <h3>What is a Single Page Application (SPA)?</h3>
      <p>
        A Single Page Application loads only one HTML page and dynamically
        updates the content without reloading the entire page. React handles
        this efficiently by updating only the required parts of the UI.
      </p>

      <h3>How React Works</h3>
      <p>
        React creates a lightweight copy of the real DOM called the{" "}
        <strong>Virtual DOM</strong>. When the state of a component changes,
        React compares the previous Virtual DOM with the new one and updates
        only the changed parts in the real DOM.
      </p>

      <h3>Basic Example</h3>
      <p>
        Below is a simple React component that displays a heading:
      </p>

      <pre>
        <code>
{`function App() {
  return <h1>Hello, React!</h1>;
}

export default App;`}
        </code>
      </pre>

      <h3>Key Features of React</h3>
      <ul>
        <li><strong>Declarative UI</strong> – Describe what the UI should look like</li>
        <li><strong>Component-Based</strong> – Build encapsulated components</li>
        <li><strong>Learn Once, Write Anywhere</strong></li>
      </ul>

      <h3>When Should You Use React?</h3>
      <ul>
        <li>When building dynamic user interfaces</li>
        <li>When your app has frequent UI updates</li>
        <li>When you want scalable and maintainable frontend code</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>
        Before learning React, you should have basic knowledge of:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (ES6 concepts like let, const, arrow functions)</li>
      </ul>
    </>
  );
}
