import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReportValidation from '../../middlewares/ReportInputValidation';
import { reportArticle } from '../../actions/report.action';
import { fetchReportCategories } from '../../actions/getAllReportCategory.action';

/**
   * @class ReportForm
   */
export class ReportForm extends Component {
  state = {
    details: '',
    slug: '',
    categoryId: '1',
    errors: {},
  }

  /**
   *
   * @param {*} prevProps
   * @returns {*} - slug
   */
  componentDidMount() {
    this.props.fetchReportCategories(); // eslint-disable-line
    const { articleSlug } = this.props;
    this.setState({
      slug: articleSlug,
    });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - slug
   */
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const error = Object.assign({}, errors);
      delete errors[event.target.name];
      this.setState({ [event.target.name]: event.target.value, error });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  /**
   *
   * @returns {*} - slug
   */
  onSubmit = () => {
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { reportArticle, hideReportModal, articleSlug } = this.props; // eslint-disable-line
      reportArticle(this.state);
      this.setState({ done: true });
      hideReportModal();
    }
  }

  /**
   * isValid
   * @returns {*} - state
   */
  isValid() {
    const { errors, isValid } = ReportValidation.validateReport(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  render() {
    const {
      details,
      categoryId,
      errors,
    } = this.state;

    const reportList = this.props.postReport; // eslint-disable-line

    const reports = Object.keys(reportList).map(key => reportList[key]);

    const form = (
      <div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={this.onChange}
                    value={categoryId}
                    name="categoryId"
                    id="selectText"
                  >
                    {
                      reports
                        .map(report => (
                          <option key={report.id} value={report.id}>
                            {report.title}
                          </option>
                        ))
                      }
                  </select>
                </div>
                <div className="md-form mb-4">
                  <textarea
                    type="text"
                    id="myreport"
                    className="form-control"
                    placeholder="Kindly provide us with more details"
                    value={details}
                    name="details"
                    onChange={this.onChange}
                  />
                  {errors.details && <p className="text-danger text-center">{errors.details[0]}</p>}
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={this.onSubmit}
                  >
                  Report
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    );

    return (
      <div>{ form }</div>
    );
  }
}

ReportForm.propTypes = {
  article: PropTypes.shape({}),
  articleSlug: PropTypes.string,
  reportArticle: PropTypes.func.isRequired,
  fetchReportCategories: PropTypes.func.isRequired,
  postReport: PropTypes.shape({}).isRequired
};

ReportForm.contextTypes = {
  router: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  modal: state.modal.current,
  postReport: state.postReport
});

const matchDispatchToProps = dispatch => bindActionCreators({
  reportArticle,
  fetchReportCategories,
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(ReportForm);
