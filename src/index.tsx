import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "serviceWorker";
import { setupStore } from "store/store";
import { GlobalStyle } from "styles/globalStyles";
import { HashRouter } from "react-router-dom";

const store = setupStore();

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  // logErrorToMyService(error, errorInfo);
  // }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// (<h1[\s\S]*?<\/h1>)[\s\S]*?(<pre>[\s\S]*?<\/pre>)
// [\s\S]*?<ul>([\s\S]*?)<\/ul>
// [\s\S]*?<p>[\s\S]*Ответ:.(\w)\n\n([\s\S]*)\n\n<\/p>
