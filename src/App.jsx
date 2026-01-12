import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react"; // Add this line!
import Footer from "./components/Footer.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <div className={`app ${isMenuOpen ? "menu-active" : ""}`}>
        <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <div className="main">
          <Sidebar />
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
      </div>
    </div>
  );
}

export default App;
