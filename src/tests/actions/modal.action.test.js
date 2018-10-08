import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SHOW_SIGNUP_MODAL, HIDE_SIGNUP_MODAL, SHOW_LOGIN_MODAL } from '../../actions/types';
import { showSignupModal, showLoginModal, hideSignupModal } from '../../actions/modal.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('modal actions', () => {
  it('creates SHOW_SIGNUP_MODAL action', () => {
    const expectedActions = [{
      type: SHOW_SIGNUP_MODAL
    }];

    const store = mockStore({});
    store.dispatch(showSignupModal());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates HIDE_SIGNUP_MODAL action', () => {
    const expectedActions = [{
      type: HIDE_SIGNUP_MODAL
    }];

    const store = mockStore({});
    store.dispatch(hideSignupModal());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates SHOW_LOGIN_MODAL action', () => {
    const expectedActions = [{
      type: SHOW_LOGIN_MODAL,
    }];
    const store = mockStore({});
    store.dispatch(showLoginModal());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
