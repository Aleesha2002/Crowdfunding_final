import React from "react";
import ReactDOM from "react-dom/client";
import { Sepolia } from "@thirdweb-dev/chains";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App.js";
import "./index.css";
import { StateContextProvider } from "./context";
import { ContextProvider } from "./context/Context.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <ContextProvider>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ContextProvider>
  </ThirdwebProvider>
);
