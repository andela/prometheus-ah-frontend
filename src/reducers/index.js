import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';
import articleReducer from './Article';
import socialLoginReducer from './socialLogin';
import resetPasswordReducer from './resetPasswordReducer';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail,
  articleReducer,
  socialLoginReducer,
  passwordreset: resetPasswordReducer
});

export default appReducer;
