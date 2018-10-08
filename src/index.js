import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routers/AppRouter';
import store from './store/index';
import setAuthorizationToken from './utils/setAuthorizationToken';

setAuthorizationToken();

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app')
);
