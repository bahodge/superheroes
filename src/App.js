import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routing/MainRouter";

export default function App() {
  console.log("Environment", process.env);

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
