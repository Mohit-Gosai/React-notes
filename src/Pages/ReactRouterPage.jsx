export default function ReactRouterPage() {
  return (
    <div className="page">
      <h1>React Router DOM</h1>

      <p>
        React Router DOM is a library used to add navigation and routing to React
        applications. It allows different components to be rendered based on the
        current URL without reloading the page.
      </p>

      <hr />

      <section>
        <h2>Routing Approach Used in This Project</h2>

        <p>
          This project uses the <strong>component-based routing</strong> approach
          provided by React Router DOM. Routes are defined using JSX and rendered
          using the <code>Routes</code> and <code>Route</code> components.
        </p>

        <h4>Why this approach is used</h4>
        <ul>
          <li>Easy to understand for beginners</li>
          <li>Routing logic is visible directly in JSX</li>
          <li>Works well with layouts like header and sidebar</li>
          <li>No advanced configuration required</li>
        </ul>

        <h4>Example from this project</h4>
        <pre>
          <code>
{`<Routes>
  <Route path="/" element={<Introduction />} />
  <Route path="/jsx" element={<JSXPage />} />
  <Route path="/components" element={<ComponentsPage />} />
  <Route path="/props" element={<PropsPage />} />
  <Route path="/state" element={<StatePage />} />
  <Route path="/hooks" element={<HooksPage />} />
</Routes>`}
          </code>
        </pre>

        <p>
          The sidebar uses <code>NavLink</code> to navigate between pages while
          keeping the layout unchanged.
        </p>
      </section>

      <hr />

      <section>
        <h2>Modern Routing Approach (createBrowserRouter)</h2>

        <p>
          React Router also provides a newer routing system introduced in version
          6.4+. This approach uses route configuration objects instead of JSX and
          enables advanced features.
        </p>

        <h4>What this approach offers</h4>
        <ul>
          <li>Centralized route configuration</li>
          <li>Support for loaders and actions</li>
          <li>Better error handling</li>
          <li>Scales well for large applications</li>
        </ul>

        <h4>Example</h4>
        <pre>
          <code>
{`import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);

function App() {
  return <RouterProvider router={router} />;
}`}
          </code>
        </pre>

        <p>
          This project does not use this approach to keep the learning experience
          simple and focused.
        </p>
      </section>

      <hr />

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>React Router enables client-side navigation</li>
          <li>This project uses component-based routing</li>
          <li>The modern API exists for advanced use cases</li>
          <li>Beginners should focus on one approach first</li>
        </ul>
      </section>
    </div>
  );
}
