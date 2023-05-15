import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
