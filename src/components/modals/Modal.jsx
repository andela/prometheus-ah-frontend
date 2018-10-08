import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupModal from './SignUpModal';
import LoginModal from './LoginModal';

/**
   * @class Modal
   */
export class Modal extends Component {
  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { modal } = this.props;
    const { current } = modal;

    return (
      <div
        className="modal"
        id="myModal"
        style={{ display: !current ? 'none' : 'block' }}
      >
        <div className="modal-overlay" />
        <div className="modal-dialog">
          <SignupModal show={current === 'signup'} />
          <LoginModal show={current === 'login'} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.shape({}),
};

const mapStateToProps = ({ modal }) => ({
  modal
});

export default connect(mapStateToProps, null)(Modal);
