import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from 'core/history';
import { App } from 'App';
import store from 'store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>Hello fkc world</App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
