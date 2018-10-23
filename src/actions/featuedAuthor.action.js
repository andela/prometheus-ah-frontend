import axios from 'axios';
import config from '../config';
import routes from '../constants/routes';
import { GET_FEATURED_AUTHOR, GET_FEATURED_AUTHOR_FAIL } from './types';

export const fetchFeaturedAuthor = featuredAuthor => ({
  type: GET_FEATURED_AUTHOR,
  featuredAuthor
});

export const fetchFeaturedAuthorFail = () => ({
  type: GET_FEATURED_AUTHOR_FAIL
});


const fetchAuthor = () => dispatch => axios.get(`${config.apiUrl}${routes.FEATURED_AUTHOR}`)
  .then((response) => {
    dispatch(fetchFeaturedAuthor(response.data.user));
  })
  .catch((error) => {
    dispatch(fetchFeaturedAuthorFail(error.response.data));
  });

export default fetchAuthor;
