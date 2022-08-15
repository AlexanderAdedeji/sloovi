import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "./redux/store";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { HomeContextProvider } from "./hooks/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeContextProvider>
        <Router>
          <App />
        </Router>
      </HomeContextProvider>
    </Provider>
  </React.StrictMode>
);
