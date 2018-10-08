import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LOGOUT_USER } from '../../actions/types';
import logoutAction from '../../actions/authentication/logoutAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('creates LOGOUT_USER action', () => {
  const expectedActions = [{
    type: LOGOUT_USER,
  }];
  const store = mockStore({});
  store.dispatch(logoutAction());
  expect(store.getActions()).toEqual(expectedActions);
});
