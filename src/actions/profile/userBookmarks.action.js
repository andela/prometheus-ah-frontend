import axios from 'axios';

import config from '../../config';
import { GET_USER_BOOKMARK_SUCCESS, GET_USER_BOOKMARK_FAILURE } from '../types';

export const getBookmarksSuccess = bookmarks => ({
  type: GET_USER_BOOKMARK_SUCCESS,
  bookmarks
});

export const getBookmarksFailure = error => ({
  type: GET_USER_BOOKMARK_FAILURE,
  error
});

const userBookmarks = () => dispatch => axios.get(
  `${config.apiUrl}/articles?favorite=true`
)
  .then((result) => {
    dispatch(getBookmarksSuccess(result.data));
  })
  .catch((err) => {
    dispatch(getBookmarksSuccess(err.response.data));
  });

export default userBookmarks;
