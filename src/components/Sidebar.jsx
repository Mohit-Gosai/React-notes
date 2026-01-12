import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <aside className="sidebar">
      <h3>Kick Start</h3>
      <Link to="">Introduction</Link>
      <Link to="/jsxPage">JSX</Link>
      <Link to="/componentsPage">Components</Link>
      <Link to="/propsPage">Props</Link>
      <Link to="/statePage">State</Link>
      <Link to="/hooksPage">Hooks</Link>
      <Link to="/reactRouterPage">React Router DOM</Link>
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
