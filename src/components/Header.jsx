function Header({ toggleMenu }) {
  return (
    <header className="header">
      <div>
        <h1>📘 React Notes</h1>
        <p>Learn React from basics to essentials</p>
      </div>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        ≡
      </button>
    </header>
  );
}

export default Header;
