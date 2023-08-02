import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { darkTheme } from "./styles/themes/dark.js";
import { lightTheme } from "./styles/themes/light.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={lightTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
