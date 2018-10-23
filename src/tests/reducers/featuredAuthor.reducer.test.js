import featuredAuthorReducer from '../../reducers/featuredAuthor';
import { GET_FEATURED_AUTHOR, GET_FEATURED_AUTHOR_FAIL } from '../../actions/types';

describe('featuredAuthor Reducer', () => {
  it('should return the initial state', (done) => {
    expect(featuredAuthorReducer(undefined, {})).toEqual({
      featuredAuthor: null
    });
    done();
  });

  it('should set the featured author when passed GET_FEATURED_AUTHOR', (done) => {
    const state = {};
    const featuredAuthor = {
      id: 2,
      username: 'faksam',
      firstname: null,
      lastname: null,
      image: null,
      articles: [
        {
          id: 23,
          slug: 'the-most-important-skill-nobody-taught-you',
          title: 'The most important skill nobody taught you',
          readingTime: '1 min read'
        }
      ]
    };

    const action = {
      type: GET_FEATURED_AUTHOR,
      featuredAuthor
    };
    const newState = featuredAuthorReducer(state, action);
    expect(newState.featuredAuthor.username).toEqual('faksam');
    done();
  });

  it('should set the featured author when passed GET_FEATURED_AUTHOR_FAIL', (done) => {
    const state = {
      featuredAuthor: null
    };

    const action = {
      type: GET_FEATURED_AUTHOR_FAIL
    };
    const newState = featuredAuthorReducer(state, action);
    expect(newState.featuredAuthor).toEqual(null);
    done();
  });
});
