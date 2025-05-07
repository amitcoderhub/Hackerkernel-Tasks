// index.js (or main.jsx)
import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import "./index.css";
import App from "./App";

// Use createRoot to render your app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
