import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from '../auth/SignUpForm.jsx';
import { hideSignupModal } from '../../actions/modal.action';

/**
   * @class Modal
   */
export class SignUpModal extends React.Component {
  
  closeModal = () => {
    this.props.hideSignupModal();
  }

  render() {
    const { show } = this.props;
    return (
      <div className="modal-content" style={{ display: !show ? 'none' : 'block'}}>
        <div className="modal-header card-title card-header"><h5>SIGN UP</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={this.closeModal}
          >
            &times;
          </button>
        </div>
        <SignUpForm />
      </div>
    );
  }
};

SignUpModal.propTypes = {
  hideSignupModal: PropTypes.func.isRequired,
};

export default connect(null, { hideSignupModal })(SignUpModal);
