import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import NotFoundPage from '../views/NotFoundPage';
import LandingPage from '../views/LandingPage';
import Header from '../components/Header';
import PrivateRoute from '../utils/PrivateRoute';
import DefaultVerifyEmail from '../components/auth/VerifyEmail';
import ArticleListPage from '../components/article/ArticleListPage';
import ReadArticle from '../components/article/ReadArticle';
import SocialLoginContainer from '../components/socialLogin/SocialLoginContainer';
import ResetPasswordRequestPage from '../components/auth/ResetPasswordRequest';
import ResetPasswordUpdatePage from '../components/auth/ResetPasswordUpdate';
import CreateArticlePage from '../components/article/CreateArticlePage';
import UserArticle from '../components/article/UserArticle';
import EditArticle from '../components/article/EditArticle';


const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.USER_ARTICLE} component={UserArticle} />
        <PrivateRoute exact path={routes.EDIT_ARTICLE} component={EditArticle} />
        <Route exact path={routes.READ_ARTICLE} component={ReadArticle} />
        <Route exact path={routes.VERIFY_EMAIL} component={DefaultVerifyEmail} />
        <Route exact path={routes.SOCIAL} component={SocialLoginContainer} />
        <Route exact path={routes.RESET_PASSWORD} component={ResetPasswordRequestPage} />
        <Route exact path={routes.PASSWORD_RESET} component={ResetPasswordUpdatePage} />
        <Route exact path={routes.LIST_ARTICLE} component={ArticleListPage} />
        <PrivateRoute exact path={routes.NEW_ARTICLE} component={CreateArticlePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
