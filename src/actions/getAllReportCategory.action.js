import axios from 'axios';
import config from '../config';
import { ALL_REPORT_CATEGORY } from './types';

export const allReportCategory = category => ({
  type: ALL_REPORT_CATEGORY,
  category
});

export const fetchReportCategories = () => dispatch => (
  axios.get(`${config.apiUrl}/reportCategories/`)
    .then((response) => {
      const { reportCategories } = response.data;
      dispatch(allReportCategory(reportCategories));
    })
);
