import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import {
  fetchReportCategories,
} from '../../actions/getAllReportCategory.action';
import { ALL_REPORT_CATEGORY } from '../../actions/types';
import mockCookieStorage from '../__mocks__/mockCookieStorage';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

window.cookies = mockCookieStorage;

describe('Get all report Category actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create ALL_REPORT_CATEGORY when action is successful', (done) => {
    const { reportCategoryDetails } = mockData;
    moxios.stubRequest(`${config.apiUrl}/reportCategories/`, {
      status: 200,
      response: reportCategoryDetails
    });
    const expectedActions = {
      type: ALL_REPORT_CATEGORY,
      category: reportCategoryDetails
    };

    const store = mockStore({});
    store.dispatch(fetchReportCategories(reportCategoryDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
