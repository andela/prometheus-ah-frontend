import reportArticle from '../../reducers/reportArticle';
import {
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_ERROR,
  ALL_REPORT_CATEGORY
} from '../../actions/types';
import mockData from '../__mocks__/mockData';

describe('Report Article Reducer', () => {
  it('should return the initial state', (done) => {
    expect(reportArticle(undefined, {})).toEqual({
      success: {}, error: {}, reports: {}
    });
    done();
  });
  it('should send a success message when passed REPORT_ARTICLE_SUCCESS', (done) => {
    const state = {};
    const success = mockData.reportSuccessMessage;
    const action = {
      type: REPORT_ARTICLE_SUCCESS,
      success
    };

    const newState = reportArticle(state, action);
    expect(newState).toEqual(action.success);
    done();
  });
  it('should send an error message when passed REPORT_ARTICLE_ERROR', (done) => {
    const state = {};
    const error = mockData.errorResponse;
    const action = {
      type: REPORT_ARTICLE_ERROR,
      error
    };

    const newState = reportArticle(state, action);
    expect(newState.error.error).toEqual(undefined);
    done();
  });
  it('should get all report category when ALL_REPORT_CATEGORY is dispatched', (done) => {
    const state = {};
    const category = mockData.reportCategoryDetails;
    const action = {
      type: ALL_REPORT_CATEGORY,
      category
    };

    const newState = reportArticle(state, action);
    expect(newState).toEqual(action.category);
    done();
  });
});
