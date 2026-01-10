import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react"; // Add this line!

import Introduction from "./Pages/IntroductionPage.jsx";
import JSXPage from "./Pages/HtmlJsPage.jsx";
import ComponentsPage from "./Pages/ComponentsPage.jsx";
import PropsPage from "./Pages/PropsPage.jsx";
import StatePage from "./Pages/StatePage.jsx";
import HooksPage from "./Pages/HooksPage.jsx";
import ReactRouterPage from "./Pages/ReactRouterPage.jsx";
import DataFlowPage from "./Pages/core-concepts/DataFlowPage.jsx";
import ComponentLifecyclePage from "./Pages/core-concepts/ComponentLifeCyclePage.jsx";
import StateVsPropsPage from "./Pages/core-concepts/StateVsPropsPage.jsx";
import RenderingVirtualDOMPage from "./Pages/core-concepts/RenderingVirtualDOMPage.jsx";
import ControlledComponentsPage from "./Pages/core-concepts/ControlledComponentsPage.jsx";
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
                <Routes>
                  <Route path="/" element={<Introduction />} />
                  <Route path="/jsx" element={<JSXPage />} />
                  <Route path="/components" element={<ComponentsPage />} />
                  <Route path="/props" element={<PropsPage />} />
                  <Route path="/state" element={<StatePage />} />
                  <Route path="/hooks" element={<HooksPage />} />
                  <Route path="/react-routes" element={<ReactRouterPage />} />
                  <Route path="/data-flow" element={<DataFlowPage />} />
                  <Route path="/component-lifecycle" element={<ComponentLifecyclePage />} />
                  <Route path="/state-vs-props" element={<StateVsPropsPage />} />
                  <Route path="/rendering-virtual-dom" element={<RenderingVirtualDOMPage />} />
                  <Route path="/controlled-components" element={<ControlledComponentsPage />} />

                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
