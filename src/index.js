import React from 'react';
import ReactDOM from 'react-dom';
import "regenerator-runtime/runtime.js";
import { BrowserRouter , Route, Routes} from 'react-router-dom';


import './index.scss';


import App from './App'


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

