import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LoginPage from '../views/LoginPage';
import LandingPage from '../views/LandingPage';
import VerifyEmail from '../components/auth/VerifyEmail';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_IN} component={LoginPage} />
        <Route exact path={routes.VERIFY_EMAIL} component={VerifyEmail} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
