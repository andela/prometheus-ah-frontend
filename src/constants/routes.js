const routes = {
  LANDING: '/',
  SIGN_UP: '/users',
  SIGN_IN: '/users/login',
  VERIFY_EMAIL: '/confirmation/',
  LIST_ARTICLE: '/articles',
  READ_ARTICLE: '/articles/:slug',
  CREATE_ARTICLE: '/articles',
  SOCIAL: '/users/oauth/:socialLogin',
  FOLLOWERS: '/followers',
  FOLLOWING: '/following',

};

export default routes;
