import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';
import articleReducer from './Article';
import featuredAuthor from './featuredAuthor';
import socialLoginReducer from './socialLogin';
import resetPasswordReducer from './resetPasswordReducer';
import userProfile from './userProfile';
import userArticles from './userArticles';
import userFollowers from './userFollowers';
import userFollowing from './userFollowing';
import editProfile from './editProfile';
import commentReducer from './comments';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail,
  articleReducer,
  featuredAuthor,
  socialLoginReducer,
  passwordreset: resetPasswordReducer,
  userProfile,
  userArticles,
  userFollowers,
  userFollowing,
  editProfile,
  commentReducer,
  passwordreset: resetPasswordReducer
});

export default appReducer;
