import axios from 'axios';
import toastr from 'toastr';
import config from '../config';
import {
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_ERROR,
  GET_REPORTS,
  GET_REPORTS_ERROR
} from './types';

export const reportActicleSuccess = success => ({
  type: REPORT_ARTICLE_SUCCESS,
  success
});

export const reportActicleError = error => ({
  type: REPORT_ARTICLE_ERROR,
  error
});
export const fetchReportSuccess = reports => ({
  type: GET_REPORTS,
  reports
});
export const fetchReportFail = error => ({
  type: GET_REPORTS_ERROR,
  error
});

export const reportArticle = reportDetails => dispatch => axios.post(
  `${config.apiUrl}/articles/${reportDetails.slug}/reports`, reportDetails
).then((res) => {
  const message = 'Success Report have been created.';
  dispatch(reportActicleSuccess({
    status: res.status,
    message
  }));
  toastr.success(message);
}).catch((error) => {
  dispatch(reportActicleError(error.response.data));
  toastr.error(error.response.data.message);
});

export const getReports = articleId => dispatch => axios
  .get(`${config.apiUrl}/reports/user/${articleId}`)
  .then((res) => {
    if (res.data.reports) {
      dispatch(fetchReportSuccess(res.data.reports[0]));
    } else {
      dispatch(fetchReportSuccess(res.data));
    }
  }).catch((error) => {
    dispatch(fetchReportFail(error.response.data));
  });
