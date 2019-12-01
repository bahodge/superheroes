import React from "react";
import "./App.css";
import "typeface-roboto";

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routing/MainRouter";
import Page from "./components/shared/Page";

export default function App() {
  console.log("Environment", process.env);

  return (
    <BrowserRouter>
      <Page>
        <MainRouter />
      </Page>
    </BrowserRouter>
  );
}
