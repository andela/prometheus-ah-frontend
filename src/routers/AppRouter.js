import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LandingPage from '../views/LandingPage';
import Header from '../components/Header';
import CreateArticle from '../components/CreateArticle';
import PrivateRoute from '../utils/PrivateRoute';
import DefaultVerifyEmail from '../components/auth/VerifyEmail';
import ArticleListPage from '../components/article/ArticleListPage';
import ReadArticle from '../components/article/ReadArticle';


const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.LIST_ARTICLE} component={ArticleListPage} />
        <Route exact path={routes.READ_ARTICLE} component={ReadArticle} />
        <Route exact path={routes.VERIFY_EMAIL} component={DefaultVerifyEmail} />
        <Route exact path={routes.LANDING} component={LandingPage} />
        <PrivateRoute exact path={routes.CREATE_ARTICLE} component={CreateArticle} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
