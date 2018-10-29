import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';
import articleReducer from './Article';
import socialLoginReducer from './socialLogin';
import resetPasswordReducer from './resetPasswordReducer';
import userProfile from './userProfile';
import userArticles from './userArticles';
import followReducer from './follow';
import editProfile from './editProfile';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail,
  articleReducer,
  socialLoginReducer,
  passwordreset: resetPasswordReducer,
  userProfile,
  userArticles,
  followReducer,
  editProfile,
});

export default appReducer;
