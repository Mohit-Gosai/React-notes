import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Introduction from "./Pages/IntroductionPage.jsx";
import HtMLJsPage from "./Pages/HtmlJsPage.jsx";
import ComponentsPage from "./Pages/ComponentsPage.jsx";
import PropsPage from "./Pages/PropsPage.jsx";
import StatePage from "./Pages/StatePage.jsx";
import HooksPage from "./Pages/HooksPage.jsx";
import ReactRouterPage from "./Pages/ReactRouterPage.jsx";
import DataFlowPage from "./Pages/core-concepts/DataFlowPage.jsx";
import ComponentLifecyclePage from "./Pages/core-concepts/ComponentLifecyclePage.jsx";
import StateVsPropsPage from "./Pages/core-concepts/StateVsPropsPage.jsx";
import RenderingVirtualDOMPage from "./Pages/core-concepts/RenderingVirtualDOMPage.jsx";
import ControlledComponentsPage from "./Pages/core-concepts/ControlledComponentsPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Introduction />,
      },
      {
        path: "JSXPage",
        element: <HtMLJsPage />,
      },
      {
        path: "ComponentsPage",
        element: <ComponentsPage />,
      },
      {
        path: "PropsPage",
        element: <PropsPage />,
      },
      {
        path: "StatePage",
        element: <StatePage />,
      },
      {
        path: "HooksPage",
        element: <HooksPage />,
      },
      {
        path: "ReactRouterPage",
        element: <ReactRouterPage />,
      },
      {
        path: "data-flow",
        element: <DataFlowPage />,
      },
      {
        path: "component-lifecycle",
        element: <ComponentLifecyclePage />,
      },
      {
        path: "state-vs-props",
        element: <StateVsPropsPage />,
      },
      {
        path: "rendering-virtual-dom",
        element: <RenderingVirtualDOMPage />,
      },
      {
        path: "controlled-components",
        element: <ControlledComponentsPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouterProvider router={router} />
  </BrowserRouter>
);
