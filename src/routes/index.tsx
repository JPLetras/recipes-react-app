import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Search from "../pages/Search";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/intro",
          element: <Intro />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/recipes-react-app",
  }
);
