import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";
import { GlobalStyle } from "styles/globalStyles";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "pages/ErrorBoundary/ErrorBoundary.page";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// (<h1[\s\S]*?<\/h1>)[\s\S]*?(<pre>[\s\S]*?<\/pre>)
// [\s\S]*?<ul>([\s\S]*?)<\/ul>
// [\s\S]*?<p>[\s\S]*Ответ:.(\w)\n\n([\s\S]*)\n\n<\/p>
