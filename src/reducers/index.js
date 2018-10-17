import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';
import articleReducer from './Article';
import socialLoginReducer from './socialLogin';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail,
  articleReducer,
  socialLoginReducer
});

export default appReducer;
