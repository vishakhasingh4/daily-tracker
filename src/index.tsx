import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/common/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
