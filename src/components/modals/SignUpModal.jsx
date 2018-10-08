import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../auth/SignUpForm';
import { hideSignupModal } from '../../actions/modal.action';

/**
   * @class Modal
   */
export class SignUpModal extends React.Component {
  closeModal = () => {
    const { hideSignupModal } = this.props;
    hideSignupModal();
  }

  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { show } = this.props;
    return (
      <div className="modal-content" style={{ display: !show ? 'none' : 'block' }}>
        <div className="modal-header card-title card-header">
          <h5 className="modal-title">SIGN UP</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={this.closeModal}
          >
            &times;
          </button>
        </div>
        <SignupForm />
      </div>
    );
  }
}

SignUpModal.propTypes = {
  hideSignupModal: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default connect(null, { hideSignupModal })(SignUpModal);
