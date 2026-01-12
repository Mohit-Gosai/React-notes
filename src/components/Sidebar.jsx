import { NavLink } from "react-router-dom";

function Sidebar() {
  
  return (
    <aside className="sidebar">
      <h3>Kick Start</h3>
      <NavLink to="">Introduction</NavLink>
      <NavLink to="/jsx">JSX</NavLink>
      <NavLink to="/components">Components</NavLink>
      <NavLink to="/props">Props</NavLink>
      <NavLink to="/state">State</NavLink>
      <NavLink to="/hooks">Hooks</NavLink>
      <NavLink to="/react-routes">React Router DOM</NavLink>
      <h3>Core Concepts</h3>
      <NavLink to="/data-flow">Data Flow</NavLink>
      <NavLink to="/component-lifecycle">Conponent Lifecycle</NavLink>
      <NavLink to="/state-vs-props" >State VS Props</NavLink>
      <NavLink to="/rendering-virtual-dom">Rendering & Virtual DOM</NavLink>
      <NavLink to="/controlled-components">Controlled Components</NavLink>

    </aside>
  );
}

export default Sidebar;
