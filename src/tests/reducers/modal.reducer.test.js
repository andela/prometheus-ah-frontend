import modal from '../../reducers/modal';
import { SHOW_SIGNUP_MODAL, HIDE_SIGNUP_MODAL } from '../../actions/types';


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

  it('should hide dispatch modal', () => {
    const expectedAction = {
      type: HIDE_SIGNUP_MODAL
    };
    expect(modal(initialState, expectedAction )).toEqual({
      current: null
    });
  });

  it('should return state by default', () => {
    expect(modal(undefined, {})).toEqual({
      current: null
    });
  });
});
