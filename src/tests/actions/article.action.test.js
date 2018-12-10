import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../__mocks__/articleMock';
import Article from '../../actions/articleActions';
import config from '../../config';

const createMockStore = configureMockStore([thunk]);

const {
  title, body, description, tagList
} = mockData[3];

jest.useFakeTimers();

const response = {
  data: {
    article: {
      body: mockData[5].body,
      createdAt: '2018-10-11T21:20:41.627Z',
      description: mockData[5].description,
      id: 59,
      readingTime: '1 min read',
      slug: 'new-test',
      title: mockData[5].title,
      updatedAt: '2018-10-11T21:20:41.627Z',
      userId: 5,
    },
    message: mockData[6].createArticleSuccessMsg,
    tags: [mockData[5].tagList]
  }
};
const response2 = {
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

  describe('Create Article', () => {
    it('should make a post request to create an article', (done) => {
      moxios.stubRequest(`${config.apiUrl}/articles/`, {
        status: 201,
        response: { data: response }
      });
      const store = createMockStore({});
      const expectedActions = [
        { type: 'CREATE_ARTICLE_BEGINS' }, {
          article: {
            data: {
              data: {
                article: {
                  body: 'New Article body',
                  createdAt: '2018-10-11T21:20:41.627Z',
                  description: 'New Article Description',
                  id: 59,
                  readingTime: '1 min read',
                  slug: 'new-test',
                  title: 'New Article Title',
                  updatedAt: '2018-10-11T21:20:41.627Z',
                  userId: 5
                },
                message: 'Article created successfully',
                tags: [['tag', 'tag3']]
              }
            }
          },
          type: 'CREATE_ARTICLE'
        }];
      store.dispatch(
        Article.createArticle(
          {
            title, body, description, tagList
          }
        )
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if article creation fail', (done) => {
      moxios.stubRequest(`${config.apiUrl}/articles/`, {
        status: 400,
        response: {
          payload: {
            data: {
              message: 'Article not created'
            }
          }
        }
      });
      const store = createMockStore({}, done);
      const expectedActions = [
        {
          type: 'CREATE_ARTICLE_BEGINS'
        }, {
          payload: {
            payload: {
              data: {
                message: 'Article not created'
              }
            }
          },
          type: 'CREATE_ARTICLE_FAIL'
        }
      ];
      store.dispatch(
        Article.createArticle({ title, body })
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  describe('Fetch all articles', () => {
    it('should make a get request to get all articles', (done) => {
      moxios.stubRequest(`${config.apiUrl}/articles`, {
        status: 200,
        response: { data: response2 }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        }, {
          type: 'GET_ARTICLES',
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
    it('should make a get request to get all featured articles', (done) => {
      moxios.stubRequest(`${config.apiUrl}/featuredArticles`, {
        status: 200,
        response: response.data
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        },
        {
          type: 'GET_FEATURED_ARTICLES',
          featuredArticles: response.data.articles
        }
      ];
      store.dispatch(
        Article.fetchFeaturedArticles()
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
  describe('Fetch Single article', () => {
    it('should make a get request to get all articles', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 200,
        response: response.data
      });
      const store = createMockStore({});
      const expectedActions = [
        { type: 'GET_ARTICLE_BEGINS' }, { article: response.data.article, type: 'GET_ARTICLE' }
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
    it('should dispatch the necessary action if server error', (done) => {
      const slug = undefined;
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 500,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLE_BEGINS'
        }, {
          payload: {
            message: 'Sorry, an unexpected error occurred.'
          },
          type: 'GET_ARTICLE_REJECTED'
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
  describe('Fetch user article', () => {
    it('should make a get request to get all articles', (done) => {
      const user = 'peter';
      moxios.stubRequest(`${config.apiUrl}/articles?user=${user}`, {
        status: 200,
        response: { data: response2 }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        }, {
          article: undefined,
          type: 'GET_ARTICLES'
        }
      ];
      store.dispatch(
        Article.fetchUserArticle(user)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if fetching article fails', (done) => {
      const user = '';
      moxios.stubRequest(`${config.apiUrl}/articles?user=${user}`, {
        status: 404,
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
        Article.fetchUserArticle(user)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if server error', (done) => {
      const user = undefined;
      moxios.stubRequest(`${config.apiUrl}/articles?user=${user}`, {
        status: 500,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'GET_ARTICLES_BEGINS'
        }, {
          payload: {
            message: 'Sorry, an unexpected error occurred.'
          },
          type: 'GET_ARTICLES_REJECTED'
        }
      ];
      store.dispatch(
        Article.fetchUserArticle(user)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  describe('Edit a user article', () => {
    it('should make a put request edit a user article', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 200,
        response: { data: response }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'EDIT_ARTICLE_BEGINS'
        }, {
          article: undefined,
          type: 'EDIT_ARTICLE'
        }
      ];
      store.dispatch(
        Article.editUserArticle(slug, mockData[3])
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
          type: 'EDIT_ARTICLE_BEGINS'
        }, {
          type: 'EDIT_ARTICLE_FAIL',
          payload: 'Sorry, an unexpected error occurred.',
        }
      ];
      store.dispatch(
        Article.editUserArticle(slug, mockData[3])
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if server error', (done) => {
      const slug = undefined;
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 500,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'EDIT_ARTICLE_BEGINS'
        }, {
          payload: {
            message: 'Sorry, an unexpected error occurred.'
          },
          type: 'EDIT_ARTICLE_REJECTED'
        }
      ];
      store.dispatch(
        Article.editUserArticle(slug, mockData[3])
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
  //
  describe('Delete a user article', () => {
    it('should make a delete request to delete a user article', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 200,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'DELETE_ARTICLE_BEGINS'
        }, {
          article:
          {
            message: undefined
          },
          type: 'DELETE_ARTICLE'
        }
      ];
      store.dispatch(
        Article.deleteUserArticle(slug)
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
          type: 'DELETE_ARTICLE_BEGINS'
        }, {
          type: 'DELETE_ARTICLE_FAIL',
          payload: 'Sorry, an unexpected error occurred.',
        }
      ];
      store.dispatch(
        Article.deleteUserArticle(slug)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
    it('should dispatch the necessary action if server error', (done) => {
      const slug = undefined;
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}`, {
        status: 500,
        response: { message: 'Sorry, an unexpected error occurred.' }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'DELETE_ARTICLE_BEGINS'
        }, {
          payload: {
            message: 'Sorry, an unexpected error occurred.'
          },
          type: 'DELETE_ARTICLE_REJECTED'
        }
      ];
      store.dispatch(
        Article.deleteUserArticle(slug)
      )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });

  describe('LIKE ARTICLE', () => {
    it('should like an article when the user clicks on the like icon', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/like`, {
        status: 201,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'LIKE_ARTICLE_SUCCESS',
        }
      ];
      store.dispatch(Article.likeArticle(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

    it('should not like an article when an error occurs', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/like`, {
        status: 500,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'LIKE_ARTICLE_FAILED',
        }
      ];
      store.dispatch(Article.likeArticle(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

    it('should unlike an article when the same user clicks on the like icon', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/unlike`, {
        status: 200,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'UNLIKE_ARTICLE_SUCCESS',
        }
      ];
      store.dispatch(Article.unlikeArticle(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

    it('should not unlike an article when an error occurs', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/unlike`, {
        status: 400,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'UNLIKE_ARTICLE_FAILED',
        }
      ];
      store.dispatch(Article.unlikeArticle(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

    it('should return likes count', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/like`, {
        status: 200,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'LIKES_COUNT_SUCCESS',
          count: undefined
        }
      ];
      store.dispatch(Article.articleLikesCount(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

    it('should not return likes count', (done) => {
      const slug = 'new-article';
      moxios.stubRequest(`${config.apiUrl}/articles/${slug}/like`, {
        status: 400,
        response: { data: response.data.message }
      });
      const store = createMockStore({});
      const expectedActions = [
        {
          type: 'LIKES_COUNT_FAILED'
        }
      ];
      store.dispatch(Article.articleLikesCount(slug))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });
  });
});
