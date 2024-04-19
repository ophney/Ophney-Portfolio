import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

import App from "./App";
import { Home, About, Portfolio, Skills, Contact } from "./pages";
import "./index.css";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
