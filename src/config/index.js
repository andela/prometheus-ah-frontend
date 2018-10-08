export default {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://prometheus-ah-staging.herokuapp.com/api' : 'http://localhost:3000/api',
};
