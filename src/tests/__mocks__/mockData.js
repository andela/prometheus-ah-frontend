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


  authResponse: {
    token:
    'emailToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
  }

}

export default mockData;