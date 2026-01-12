import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.css";

import Introduction from "./Pages/IntroductionPage";
import HtMLJsPage from "./Pages/HtmlJsPage";
import ComponentsPage from "./Pages/ComponentsPage";
import PropsPage from "./Pages/PropsPage";
import StatePage from "./Pages/StatePage";
import HooksPage from "./Pages/HooksPage";
import ReactRouterPage from "./Pages/ReactRouterPage";
import DataFlowPage from "./Pages/core-concepts/DataFlowPage";
import ComponentLifecyclePage from "./Pages/core-concepts/ComponentLifecyclePage";
import StateVsPropsPage from "./Pages/core-concepts/StateVsPropsPage";
import RenderingVirtualDOMPage from "./Pages/core-concepts/RenderingVirtualDOMPage";
import ControlledComponentsPage from "./Pages/core-concepts/ControlledComponentsPage";


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
