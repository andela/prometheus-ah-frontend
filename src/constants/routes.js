const routes = {
  LANDING: '/',
  SIGN_UP: '/users',
  SIGN_IN: '/users/login',
  VERIFY_EMAIL: '/confirmation/',
  LIST_ARTICLE: '/articles',
  READ_ARTICLE: '/articles/:slug',
  CREATE_ARTICLE: '/articles',
  SOCIAL: '/users/oauth/:socialLogin',
  RESET_PASSWORD: '/users/request-password-reset',
  PASSWORD_RESET: '/users/password-reset'
};

export default routes;
