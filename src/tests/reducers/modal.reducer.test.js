import modal from '../../reducers/modal';
import {
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SHOW_REPORT_MODAL,
  HIDE_REPORT_MODAL
} from '../../actions/types';


describe('modal actions', () => {
  const initialState = {
    current: null
  };

  it('should dispatch the modal', () => {
    const action = {
      type: SHOW_SIGNUP_MODAL
    };
    expect(modal(initialState, action)).toEqual({
      current: 'signup'
    });
  });

  it('should hide dispatch the modal', () => {
    const expectedAction = {
      type: HIDE_SIGNUP_MODAL
    };
    expect(modal(initialState, expectedAction)).toEqual({
      current: null
    });
  });

  it('should dispatch the login modal', () => {
    const action = {
      type: SHOW_LOGIN_MODAL
    };
    expect(modal(initialState, action)).toEqual({
      current: 'login'
    });
  });

  it('should hide dispatch the modal', () => {
    const expectedAction = {
      type: HIDE_LOGIN_MODAL
    };
    expect(modal(initialState, expectedAction)).toEqual({
      current: null
    });
  });

  it('should dispatch the modal for to report an article', () => {
    const expectedAction = {
      type: SHOW_REPORT_MODAL
    };
    expect(modal(initialState, expectedAction)).toEqual({
      current: 'report'
    });
  });

  it('should hide the modal for to report an article', () => {
    const expectedAction = {
      type: HIDE_REPORT_MODAL
    };
    expect(modal(initialState, expectedAction)).toEqual({
      current: null
    });
  });

  it('should return state by default', () => {
    expect(modal(undefined, {})).toEqual({
      current: null
    });
  });
});
