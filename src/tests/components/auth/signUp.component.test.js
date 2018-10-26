import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUpForm } from '../../../components/auth/SignUpForm';

Enzyme.configure({ adapter: new Adapter() });


const signUpDetails = {
  username: 'valentine',
  email: 'ugochukwu.ezeh@yahoo.com',
  password: 'password',
  password_confirmation: 'password'
};

const signUpDetails2 = {
  username: 'password',
  email: 'password@gmail.com',
  password: '',
  password_confirmation: ''
};


const signUpDetailsError = {
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  error: {
    email: 'The email field is required.',
    password: 'The password field is required.',
    password_confirmation: 'The password confirmation field is required.',
    username: 'The username field is required.'
  }
};

const error = {
  email: 'The email field is required.',
  password: 'The password field is required.',
  password_confirmation: 'The password confirmation field is required.',
  username: 'The username field is required.'
};

const setUp = () => {
  const props = {
    signUp: jest.fn().mockResolvedValue(Promise.resolve()),
    auth: false,
    router: undefined,
    deleteError: jest.fn(),
    userProfile: jest.fn()
  };
  return shallow(<SignUpForm {...props} />);
};

describe('SignUp page component', () => {
  describe('SignUp component snapshot', () => {
    it('should render with right amount of elements', () => {
      const { wrapper } = setUp();
      expect(wrapper).toMatchSnapshot();
    });
  });
  it('should set username when username changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'username',
        value: 'ezeh'
      }
    };
    const wrapper = setUp();
    const username = wrapper.find('.myusername');

    username.simulate('change', event);

    const expectedUsername = 'ezeh';

    expect(wrapper.instance().state.username).toBe(expectedUsername);
  });

  it('should set email when email changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'email',
        value: 'ugochukwu.ezeh@yahoo.com'
      }
    };
    const wrapper = setUp();
    const email = wrapper.find('.myemail');

    email.simulate('change', event);

    const expectedEmail = 'ugochukwu.ezeh@yahoo.com';

    expect(wrapper.instance().state.email).toBe(expectedEmail);
  });

  it('should set email when email changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'email',
        value: 'ugochukwu.ezeh@yahoo.com'
      }
    };
    const wrapper = setUp();
    const email = wrapper.find('.myemail');

    email.simulate('change', event);

    wrapper.setState({ errors: { [event.target.name]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });
  it('should set password when password changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'awesomeGod'
      }
    };
    const wrapper = setUp();
    const password = wrapper.find('.mypassword');

    password.simulate('change', event);

    const expectedPassword = 'awesomeGod';

    expect(wrapper.instance().state.password).toBe(expectedPassword);
  });

  it('should set confirm password when confirm password changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password_confirmation',
        value: 'awesomeGod'
      }
    };
    const wrapper = setUp();
    const password_confirmation = wrapper.find('.mypassword_confirmation'); // eslint-disable-line

    password_confirmation.simulate('change', event);

    const expectedPassword_confirmation = 'awesomeGod'; // eslint-disable-line

    expect(wrapper.instance().state.password_confirmation).toBe(expectedPassword_confirmation);
  });

  it('should popuplate error object when username does not exist', () => {
    const isValid = {
      preventDefault: jest.fn(),

    };
    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetailsError.error);
    myForm.simulate('click', isValid);

    const expectedUsernameError = error.username[0];

    expect(wrapper.instance().state.username[0]).toBe(expectedUsernameError);
  });

  it('should popuplate error object when username does not exist', () => {
    const isValid = {
      preventDefault: jest.fn(),

    };
    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetailsError.error);
    myForm.simulate('click', isValid);

    const expectedEmailError = error.email[0];

    expect(wrapper.instance().state.email[0]).toBe(expectedEmailError);
  });

  it('should popuplate error object when username does not exist', () => {
    const isValid = {
      preventDefault: jest.fn(),

    };
    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetailsError.error);
    myForm.simulate('click', isValid);

    const expectedPasswordError = error.password[0];

    expect(wrapper.instance().state.password[0]).toBe(expectedPasswordError);
  });

  it('should popuplate error object when username does not exist', () => {
    const isValid = {
      preventDefault: jest.fn(),

    };
    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetailsError.error);
    myForm.simulate('click', isValid);

    const expectedPasswordConfirmError = error.password_confirmation[0];

    expect(wrapper.instance().state.password_confirmation[0]).toBe(expectedPasswordConfirmError);
  });

  it('should sign up user when correct credentials are supplied', () => {
    const event = {
      preventDefault: jest.fn(),
    };

    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetails);
    myForm.simulate('click', event);
  });

  it('should return error when username or email already exist', () => {
    const event = {
      preventDefault: jest.fn(),
    };

    const wrapper = setUp();
    const myForm = wrapper.find('.register');

    wrapper.setState(signUpDetails2);
    myForm.simulate('click', event);
  });
});
