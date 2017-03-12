import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, browserHistory} from "react-router";

import store from "./store";
import routes from "./routes";
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);