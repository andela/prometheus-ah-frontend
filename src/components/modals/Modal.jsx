import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpModal from '../modals/SignUpModal.jsx';

/**
   * @class Modal
   */
export class Modal extends Component {
  render() {
    const { current } = this.props.modal;
    return (
      <div
        className="modal"
        id="myModal"
        style={{ display: !current ? 'none' : 'block'}}
      >
        <div className="modal-overlay" />
        <div className="modal-dialog">
          <SignUpModal show={current === 'signup'} />
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
