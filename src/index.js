import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Store";
import ToDoList from "./TodoComponent";
ReactDOM.render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
  document.getElementById("root")
);
