import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SHOW_SIGNUP_MODAL, HIDE_SIGNUP_MODAL, SHOW_LOGIN_MODAL, SHOW_REPORT_MODAL, HIDE_REPORT_MODAL
} from '../../actions/types';
import {
  showSignupModal, showLoginModal, hideSignupModal, showReportModal, hideReportModal
} from '../../actions/modal.action';

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
  it('creates SHOW_REPORT_MODAL action', () => {
    const expectedActions = [{
      type: SHOW_REPORT_MODAL,
    }];
    const store = mockStore({});
    store.dispatch(showReportModal());

    expect(store.getActions()).toEqual(expectedActions);
  });
  it('creates HIDE_REPORT_MODAL action', () => {
    const expectedActions = [{
      type: HIDE_REPORT_MODAL,
    }];
    const store = mockStore({});
    store.dispatch(hideReportModal());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
