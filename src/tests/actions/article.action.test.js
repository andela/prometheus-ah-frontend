import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import Article from '../../actions/articleActions';
import config from '../../config';

const createMockStore = configureMockStore([thunk]);

const response2 = {
  data: {
    article: {
      body: 'Hello there2',
      description: 'Short description2',
      title: 'short title2',
      slug: 'new-article',
      User: {
        email: 'email2@email.com',
        firstname: 'Ade2',
        image: 'image2',
        lastname: 'lastname2',
        role: 'user2',
        status: 'active',
        username: 'adeola'
      }
    }
  },
};
const response = {
  data: {
    articles: [
      {
        body: 'Hello there',
        description: 'Short description',
        title: 'short title',
        slug: 'article',
        User: {
          email: 'email@email.com',
          firstname: 'Ade',
          image: 'image',
          lastname: 'lastname',
          role: 'user',
          status: 'active',
          username: 'adeola'
        }
      },
      {
        body: 'Hello there2',
        description: 'Short description2',
        title: 'short title2',
        slug: 'new-article',
        User: {
          email: 'email2@email.com',
          firstname: 'Ade2',
          image: 'image2',
          lastname: 'lastname2',
          role: 'user2',
          status: 'active',
          username: 'adeola'
        }
      }
    ]
  }
};

describe('Article Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  describe('Fetch all articles', () => {
    it('should make a get request to get all articles', (done) => {
      moxios.stubRequest(`${config.apiUrl}/articles`, {
        status: 200,
        response: { data: response }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        }, {
          type: 'GET_ARTICLES_SUCCESSFUL',
          article: response
        }
      ];
      store.dispatch(
        Article.fetchArticle()
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if fetching article fails', (done) => {
      moxios.stubRequest(`${config.apiUrl}/articles`, {
        status: 400,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        }, {
          type: 'GET_ARTICLES_FAIL',
          payload: 'Sorry, an unexpected error occurred.',
        }
      ];
      store.dispatch(
        Article.fetchArticle()
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  it('should dispatch the necessary action if fetching article fails', (done) => {
    moxios.stubRequest(`${config.apiUrl}/articles`, {
      status: 500,
      response: { message: 'Sorry, an unexpected error occurred.' }
    });
    const store = createMockStore({});
    const expectedActions = [
      {
        type: 'GET_ARTICLES_BEGINS'
      },
      {
        payload:
        {
          message: 'Sorry, an unexpected error occurred.'
        },
        type: 'GET_ARTICLES_REJECTED'
      }];
    store.dispatch(
      Article.fetchArticle('new')
    )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  //

  describe('Fetch Single article', () => {
    it('should make a get request to get all articles', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 200,
        response: response2
      });
      const store = createMockStore({});
      const expectedActions = [
        { type: 'GET_ARTICLE_BEGINS' }, { article: undefined, type: 'GET_ARTICLE_SUCCESSFUL' }
      ];
      store.dispatch(
        Article.fetchSingleArticle(slug)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if fetching article fails', (done) => {
      const slug = '';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 400,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLE_BEGINS'
        }, {
          type: 'GET_ARTICLE_FAIL',
          payload: 'Sorry, an unexpected error occurred.',
        }
      ];
      store.dispatch(
        Article.fetchSingleArticle(slug)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  it('should dispatch the necessary action if fetching article fails', (done) => {
    const slug = {};
    moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
      status: 500,
      response: { message: 'Sorry, an unexpected error occurred.' }
    });
    const store = createMockStore({});
    const expectedActions = [
      {
        type: 'GET_ARTICLE_BEGINS'
      },
      {
        payload:
        {
          message: 'Sorry, an unexpected error occurred.'
        },
        type: 'GET_ARTICLE_REJECTED'
      }];
    store.dispatch(
      Article.fetchSingleArticle(slug)
    )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
