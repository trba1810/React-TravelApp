import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./components/DestinationIndex";
import Header from "./layout/Header";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { DestinationAPI } from "./api/DestinationAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={DestinationAPI}>
    <Header />
    <DestinationIndex />
  </ApiProvider>
);
