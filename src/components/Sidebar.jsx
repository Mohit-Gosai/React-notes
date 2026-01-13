import { Link } from "react-router-dom";

function Sidebar({ closeMenu }) {
  const close = () => {
    if (closeMenu) closeMenu();
  };

  return (
    <aside className="sidebar">
      <h3>Kick Start</h3>
      <Link to="/" onClick={close} >Introduction</Link>
      <Link to="/JSXPage" onClick={close}>JSX</Link>
      <Link to="/ComponentsPage" onClick={close}>Components</Link>
      <Link to="/PropsPage" onClick={close}>Props</Link>
      <Link to="/StatePage" onClick={close}>State</Link>
      <Link to="/HooksPage" onClick={close}>Hooks</Link>
      <Link to="/ReactRouterPage" onClick={close}>React Router DOM</Link>
      <h3>Core Concepts</h3>
      <Link to="/data-flow" onClick={close}>Data Flow</Link>
      <Link to="/component-lifecycle" onClick={close}>Conponent Lifecycle</Link>
      <Link to="/state-vs-props" onClick={close} >State VS Props</Link>
      <Link to="/rendering-virtual-dom" onClick={close}>Rendering & Virtual DOM</Link>
      <Link to="/controlled-components" onClick={close}>Controlled Components</Link>
    </aside>
  );
}

export default Sidebar;
