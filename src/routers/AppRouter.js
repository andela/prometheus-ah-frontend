import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LandingPage from '../views/LandingPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateArticle from '../components/CreateArticle';
import PrivateRoute from '../utils/PrivateRoute';
import DefaultVerifyEmail from '../components/auth/VerifyEmail';
import ArticleListPage from '../components/article/ArticleListPage';
import ReadArticle from '../components/article/ReadArticle';
import DisplayFollow from '../components/FollowingPage';
import SocialLoginContainer from '../components/socialLogin/SocialLoginContainer'; // eslint-disable-line

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
        <PrivateRoute path={routes.CREATE_ARTICLE} component={CreateArticle} />
        <Route exact path={routes.SOCIAL} component={SocialLoginContainer} />
        <Route exact path={routes.FOLLOWERS} component={DisplayFollow} />
        <Route exact path={routes.FOLLOWING} component={DisplayFollow} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRoutes;
