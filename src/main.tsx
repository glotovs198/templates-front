import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./app";

import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme } from "./shared/ui/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={lightTheme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
