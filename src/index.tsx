import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./contexts/AppContext";
import { router } from "./routes";
import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
