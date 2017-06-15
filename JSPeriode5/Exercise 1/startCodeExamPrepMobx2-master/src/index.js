import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import info from "./dataModel"

ReactDOM.render(
  <App data={info._studentsInfo} />,
  document.getElementById('root')
);
