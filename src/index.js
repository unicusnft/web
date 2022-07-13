import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {extendTheme, ChakraProvider} from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  main: {
    500: "#8886FC"
  },
  secondary: {
    500: "#1F1F1F"
  }
};

const styles = {
  global: {
    body: {
      bg: '#121212',
      textColor: 'white',
      fontFamily: "Montserrat"
    }
  }
}

const theme = extendTheme({colors, styles});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
