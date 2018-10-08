import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LandingPage from '../views/LandingPage';
import VerifyEmail from '../components/auth/VerifyEmail';
import Header from '../components/Header';
import CreateArticle from '../components/CreateArticle';
import PrivateRoute from '../utils/PrivateRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.VERIFY_EMAIL} component={VerifyEmail} />
        <PrivateRoute path={routes.CREATE_ARTICLE} component={CreateArticle} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
