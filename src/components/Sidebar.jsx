import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <aside className="sidebar">
      <h3>Kick Start</h3>
      <Link to="">Introduction</Link>
      <Link to="/jsx">JSX</Link>
      <Link to="/components">Components</Link>
      <Link to="/props">Props</Link>
      <Link to="/state">State</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/react-routes">React Router DOM</Link>
      <h3>Core Concepts</h3>
      <Link to="/data-flow">Data Flow</Link>
      <Link to="/component-lifecycle">Conponent Lifecycle</Link>
      <Link to="/state-vs-props" >State VS Props</Link>
      <Link to="/rendering-virtual-dom">Rendering & Virtual DOM</Link>
      <Link to="/controlled-components">Controlled Components</Link>
    </aside>
  );
}

export default Sidebar;
