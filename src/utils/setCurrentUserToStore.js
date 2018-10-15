import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/authentication/loginAction';
import logoutAction from '../actions/authentication/logoutAction';
import userProfile from '../actions/profile/userProfile.action';

const setCurrentUserToStore = (store) => {
  const token = Cookie.get('jwtToken');
  if (token) {
    const decodedToken = jwt.decode(token);
    try {
      const isExpired = (decodedToken.exp < (Date.now() / 1000));
      if (!isExpired) {
        store.dispatch(setCurrentUser(decodedToken));
        store.dispatch(userProfile(jwt.decode(token).username));
      } else {
        store.dispatch(logoutAction());
      }
    } catch (err) {
      store.dispatch(logoutAction());
    }
  }
};

export default setCurrentUserToStore;
