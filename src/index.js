import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServicePropvider } from "./components/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

const app = (
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServicePropvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServicePropvider>
    </ErrorBoundry>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
