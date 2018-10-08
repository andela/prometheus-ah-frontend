import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { spy } from 'sinon';
import modal from '../../reducers/modal';
import { SHOW_SIGNUP_MODAL } from '../../actions/types';
import { showSignupModal } from '../../actions/modal.action';


describe('modal actions', () => {
  it('should dispatch the modal', () => {
    const action = {
      type: SHOW_SIGNUP_MODAL
    };
    expect(modal({}, action)).toEqual({
      current: 'signup'
    });
  });
});
