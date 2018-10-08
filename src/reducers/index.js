import { combineReducers } from 'redux';
import dummy from './dummy';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';

const rootReducer = combineReducers({
  dummy,
  auth,
  modal,
  verifyEmail
});

export default rootReducer;
