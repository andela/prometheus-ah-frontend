const routes = {
  LANDING: '/',
  SIGN_UP: '/users',
  SIGN_IN: '/users/login',
  VERIFY_EMAIL: '/confirmation',
  LIST_ARTICLE: '/articles',
  SOCIAL: '/users/oauth/:socialLogin',
  RESET_PASSWORD: '/users/request-password-reset',
  PASSWORD_RESET: '/users/password-reset',
  NEW_ARTICLE: '/new-story',
  USER_ARTICLE: '/articles/user',
  EDIT_ARTICLE: '/articles/:slug/edit',
  READ_ARTICLE: '/articles/:slug/'
};

export default routes;
