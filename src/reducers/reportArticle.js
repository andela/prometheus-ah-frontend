import {
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_ERROR,
  GET_REPORTS,
  GET_REPORTS_ERROR,
  ALL_REPORT_CATEGORY
} from '../actions/types';

const initialState = {
  success: {},
  error: {},
  reports: {}
};

const postReport = (state = initialState, action = {}) => {
  switch (action.type) {
    case REPORT_ARTICLE_SUCCESS: return action.success;

    case REPORT_ARTICLE_ERROR: return action.error;

    case ALL_REPORT_CATEGORY: return action.category;

    case GET_REPORTS:
      return {
        ...state,
        reports: action.reports
      };
    case GET_REPORTS_ERROR:
      return action.error;
    default: return state;
  }
};


export default postReport;
