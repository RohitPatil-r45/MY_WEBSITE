import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./desktop.css";
import "./mobile.css";
import "./mobile400px.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
