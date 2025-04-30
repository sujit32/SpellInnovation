import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./components/layout/appLayout.jsx";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
