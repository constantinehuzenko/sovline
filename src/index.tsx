import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "serviceWorker";
import { setupStore } from "store/store";
import { createGlobalStyle } from "styled-components";

const store = setupStore();

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #131C28;
  color: #ffffff;
}

#root {
  width: 100%;
  margin: 24px 0 160px 0;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
