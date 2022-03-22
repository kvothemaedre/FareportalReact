import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducers";
import { ColorModeScript } from "@chakra-ui/react";

const appStore = createStore(rootReducer);

ReactDOM.render(
  <ChakraProvider>
    <Provider store={appStore}>
      <ColorModeScript initialColorMode="light" />
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
