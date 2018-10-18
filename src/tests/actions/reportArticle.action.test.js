import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import { reportArticle, getReports } from '../../actions/report.action';
import { REPORT_ARTICLE_SUCCESS, REPORT_ARTICLE_ERROR, GET_REPORTS } from '../../actions/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Post a report on an article', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch REPORT_ARTICLE_SUCCESS when report has been created', (done) => {
    moxios.stubRequest(`${config.apiUrl}/articles/${mockData.reportArticleDetails.slug}/reports`, {
      status: 201,
      response: mockData.reportArticleDetails
    });

    const expectedActions = [
      {
        type: REPORT_ARTICLE_SUCCESS,
        success: {
          message: 'Success Report have been created.',
          status: 201
        }
      }
    ];

    const store = mockStore({});

    store.dispatch(reportArticle(mockData.reportArticleDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('should dispatch REPORT_ARTICLE_SUCCESS when report has been created', (done) => {
    moxios.stubRequest(
      `${config.apiUrl}/articles/${mockData.reportArticleDetailsError.slug}/reports`, {
        status: 404,
        response: mockData.reportArticleDetailsError
      }
    );

    const errorDetails = mockData.reportArticleDetailsError;

    const expectedActions = [
      {
        type: REPORT_ARTICLE_ERROR,
        error: errorDetails
      }
    ];

    const store = mockStore({});

    store.dispatch(reportArticle(mockData.reportArticleDetailsError)).then((res) => {
      expect(store.getActions(res.status)).toEqual(expectedActions);
    });
    done();
  });
  it('should dispatch GET_REPORTS when report has been created', (done) => {
    const articleId = 1;
    const res = {
      data: {
        reports: [{
          id: 1,
          articleId: 1,
          status: 'Open'
        }]
      }
    };
    moxios.stubRequest(`${config.apiUrl}/reports/user/${articleId}`, {
      status: 201,
      response: res.data
    });

    const expectedActions = [
      {
        type: GET_REPORTS,
        reports: res.data
      }
    ];

    const store = mockStore({});

    store.dispatch(getReports(mockData.reportArticleDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
