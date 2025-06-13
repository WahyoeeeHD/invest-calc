import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { Header as Kepala } from "./components/Header.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Kepala src="investment-calculator-logo.png" alt="Investment Logo" />
    <App />
  </StrictMode>
);
