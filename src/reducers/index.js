import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import verifyEmail from './verifyEmail';

const appReducer = combineReducers({
  auth,
  modal,
  verifyEmail
});

const initialState = appReducer({}, {});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
