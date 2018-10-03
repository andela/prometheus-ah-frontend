import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LoginPage from '../views/LoginPage';
import LandingPage from '../views/LandingPage';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_IN} component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
