import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./features/app/app";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
