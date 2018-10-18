import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideReportModal } from '../../actions/modal.action';
import ReportForm from '../report/ReportForm';

/**
 * @class ReportModal
 */
export class ReportModal extends React.Component {
  closeModal = () => {
    this.props.hideReportModal(); // eslint-disable-line
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  render() {
    const { show, article, articleSlug, hideReportModal } = this.props; // eslint-disable-line

    return (
      <div className="modal-content" style={{ display: !show ? 'none' : 'block' }}>
        <div className="modal-header card-title card-header">
          <h5>Report Form</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={this.closeModal}
          >
            &times;
          </button>
        </div>
        <ReportForm
          article={article}
          articleSlug={articleSlug}
          hideReportModal={hideReportModal}
        />
      </div>
    );
  }
}

ReportModal.propTypes = {
  hideReportModal: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
  articleSlug: PropTypes.string
};

export default connect(null, { hideReportModal })(ReportModal);
