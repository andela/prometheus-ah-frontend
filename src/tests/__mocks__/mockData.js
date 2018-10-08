const mockData = {
  signUpDetails: {
    username: 'valentine',
    email: 'ugochukwu.ezeh@yahoo.com',
    password: 'password',
    password_confirmation: 'password'
  },

  signUpDetailsError: {
    username: 'valentine',
    email: '',
    password: 'password',
    password_confirmation: 'password'
  },

  errorResponse: {
    error: 'An error occurred, try again!'
  },

  successResponse: {
    message: 'message recieved',
    status: 201,
    user: {
      token: 'abcdefghijk'
    }
  },

  emailErrorResponse: {
    error: 'Email or Username is already in use by another User.'
  },


  authResponseEmail: {
    token:
    'emailToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
  },

  clearError: {
    isAuthenticated: false,
    error: {}
  },

  successResponseEmail: {
    success: 'A verification email has been sent to ugochukwu.ezeh@yahoo.com'
  },

  authResponse: {
    data: {
      message: 'Welcome User you are now logged in.',
      user: {
        email: 'faksam@gmail.com',
        isVerified: true,
        token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
      }
    }
  },

  loginData: {
    username: 'faksam',
    password: '90123456'
  },

  loginDataError: {
    username: '',
    password: '90123456'
  },

  loginDetailsError: {
    username: '',
    password: '',
    error: {
      username: 'This username is a required field.',
      password: 'This password is a required field',
    }
  },

  error: {
    username: 'This username is a required field.',
    password: 'This password is a required field',
  },

  empty: ''
};

export default mockData;
