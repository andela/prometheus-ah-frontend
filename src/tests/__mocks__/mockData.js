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

  empty: '',
  response1: {
    data: {
      message: 'authentication successful',
      user: {
        email: 'otutudinma@gmail.com',
        username: 'dinma',
        token: 'orkdkdkkskskksksksk111kdkdkd',
      },
    },
  },

  errorResponse1: {
    error: 'An error occurred!',
    status: 401
  },
  authResponse1: {
    token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3'
  },

  user: {
    userId: 2,
    username: 'faksam',
    role: 'user',
    isVerified: true,
    image: null,
    email: 'fakunlesamuel@gmail.com',
    iat: 1539785356,
    exp: 1539871756
  },

  posts: [
    {
      id: 1,
      active: 0,
      category: 'Technology',
      slug: 'this-is-how-i-feel',
      image: 'https://image.ibb.co/eLVQwL/kids.jpg',
      title: 'My Broken Mother, My Broken Heart',
      body: `My task is getting bigger and I am equal to the task.
        Music gives a soul to the universe, wings to the mind,
        flight to the imagination and life to everything`,
      userId: 1,
      description: 'feeling very excited',
      readingTime: '1 min read',
      createdAt: '2018-09-20T13:43:12.129Z',
      updatedAt: '2018-09-20T13:48:33.958Z',
      User: {
        id: 1,
        username: 'Joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: 'Tega',
        lastname: 'Okeremeta',
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: ['Technolgy']
    },
    {
      id: 1,
      active: 1,
      category: 'Technology',
      slug: 'this-is-how-i-feel',
      image: 'https://image.ibb.co/eLVQwL/kids.jpg',
      title: 'My Broken Mother, My Broken Heart',
      body: `My task is getting bigger and I am equal to the task.
      Music gives a soul to the universe, wings to the mind,
      flight to the imagination and life to everything`,
      userId: 1,
      description: 'feeling very excited',
      readingTime: '1 min read',
      createdAt: '2018-09-20T13:43:12.129Z',
      updatedAt: '2018-09-20T13:48:33.958Z',
      User: {
        id: 1,
        username: 'Joeeasy',
        email: 'joeeasy@gmail.com',
        firstname: 'Tega',
        lastname: 'Okeremeta',
        role: 'user',
        status: 'active',
        image: null
      },
      Tags: ['Technolgy']
    }
  ],

  postProps: {
    active: 0,
    category: 'Technology',
    title: 'My Broken Mother, My Broken Heart',
    readTime: '1 min read',
    body: `My task is getting bigger and I am equal to the task.
      Music gives a soul to the universe, wings to the mind,
      flight to the imagination and life to everything`,
    image: 'https://image.ibb.co/eLVQwL/kids.jpg',
    description: 'feeling very excited',
    author: 'Okeremeta',
    date: '2018-09-20T13:43:12.129Z'
  },

  invalidEmail: 'fakeEmail',

  resetPasswordError: 'Invalid credentials',

  userEmail: {
    email: 'test@mymail.com'
  },

  password: 'password',

  password_confirmation: 'password',

  passwordtoken: '?emailToken=faketoken',

  fakePassword: '?',

  expiredlinkMessage: 'Your verification link has expired or is invalid',

  resetLinkMessage: {
    data: { message: 'A reset password link has been sent to test@mymail.com' },
  },

  resetUpdateLinkMessage: {
    data: { message: 'Password successfully updated, you can now login with your new password' },
  },
  profile: {
    bio: 'Web Developer with a passion for server side scripting and web-hunting',
    email: 'mocha@gmail.com',
    firstname: 'Mocha',
    id: 9,
    image: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
    lastname: 'Chai',
    username: 'kingslife',
  },

  editProfileError: {
    image: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
    firstname: '',
    lastname: '',
    email: '',
    bio: '',
    errors: {
      firstname: 'The firstname field is required.',
      lastname: 'The lastname field is required.',
      email: 'The email field is required.',
      bio: 'The bio field is required.'
    },
  }
};

export default mockData;
