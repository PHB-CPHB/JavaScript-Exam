import React from 'react';
import ReactDOM from 'react-dom';
import bookStore from "./models/bookStore";
import "./style/style.css";
import RouterComponent from "./routerComponent";

ReactDOM.render(
  <RouterComponent bookStore={bookStore}  />,
  document.getElementById('root')
);
