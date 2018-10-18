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
import userBookmarks from './userBookmarks';
import postReport from './reportArticle';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail,
  articleReducer,
  featuredAuthor,
  socialLoginReducer,
  passwordreset: resetPasswordReducer,
  userProfile,
  userBookmarks,
  userArticles,
  userFollowers,
  userFollowing,
  editProfile,
  commentReducer,
  postReport
});

export default appReducer;
