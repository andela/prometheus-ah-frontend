import axios from 'axios';

import config from '../../config';
import { GET_USER_ARTICLE_SUCCESS, GET_USER_ARTICLE_FAILURE } from '../types';

export const getUserArticlesSuccess = payload => ({
  type: GET_USER_ARTICLE_SUCCESS,
  payload
});

export const getUserArticlesFailure = payload => ({
  type: GET_USER_ARTICLE_FAILURE,
  payload
});

const userArticles = username => dispatch => axios.get(`${config.apiUrl}/articles?user=${username}`)
  .then((result) => {
    dispatch(getUserArticlesSuccess(result.data));
  })
  .catch((err) => {
    dispatch(getUserArticlesFailure(err.response.data));
  });

export default userArticles;
