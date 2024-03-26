import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./app";

import { ChakraProvider, defineStyle, extendTheme } from "@chakra-ui/react";

const headingTheme = defineStyle({
  fontFamily: "Unbounded",
});

const theme = extendTheme({
  components: { Heading: headingTheme },
  color: {
    purple: {
      500: "#000000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
