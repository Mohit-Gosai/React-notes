import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`app ${isMenuOpen ? "menu-active" : ""}`}>
      <Header toggleMenu={toggleMenu} />
      <div className="main">
        <Sidebar closeMenu={() => setIsMenuOpen(false)} />
        {/* New wrapper for content + footer */}
        <div className="content-area">
          <div className="content">
            <div className="content-inner">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* overlay to close sidebar on small screens */}
       <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default App;
