import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupModal from './SignUpModal';
import LoginModal from './LoginModal';
import ReportModal from './ReportModal';

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
    const { modal, article, articleSlug } = this.props;

    return (
      <div
        className="modal"
        id="myModal"
        style={{ display: modal.current === null ? 'none' : 'block' }}
      >
        <div className="modal-overlay" />
        <div className="modal-dialog">
          {modal.current === 'signup' && <SignupModal show={modal.current === 'signup'} />}
          {modal.current === 'login' && <LoginModal show={modal.current === 'login'} />}
          {modal.current === 'report' && (
            <ReportModal show={modal.current === 'report'}
              article={article} articleSlug={articleSlug}
            />)}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.shape({}),
  article: PropTypes.shape({}),
  articleSlug: PropTypes.string
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps, null)(Modal);
