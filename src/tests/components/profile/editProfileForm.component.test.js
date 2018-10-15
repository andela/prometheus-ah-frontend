import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { EditProfileForm } from '../../../components/EditProfileForm';

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => {
  const props = {
    profile: {
      image: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
      firstname: 'Travis',
      lastname: 'Mocha',
      email: 'mocha@gmail.com',
      bio: 'Web Developer with a passion for server side scripting and web-scraping skills',
      errors: {},
    },
    history: {
      push: jest.fn()
    },
    editProfile: jest.fn,
  };
  return shallow(<EditProfileForm {...props} />);
};
describe('Profile component', () => {
  it('should render the editProfileForm component', () => {
    const wrapper = setUp();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set firstname when firstname changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstname',
        value: 'Travis'
      }
    };
    const wrapper = setUp();
    const firstname = wrapper.find('#firstname');

    firstname.simulate('change', event);

    const expectedValue = 'Travis';

    expect(wrapper.instance().state.firstname).toBe(expectedValue);
  });
  it('should set lastname when lastname changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'lastname',
        value: 'Mocha'
      }
    };
    const wrapper = setUp();
    const lastname = wrapper.find('#lastname');

    lastname.simulate('change', event);

    const expectedValue = 'Mocha';

    expect(wrapper.instance().state.lastname).toBe(expectedValue);
  });
  it('should simulate profile image change', () => {
    const blob = new Blob(['foo'], { type: 'text/plain' });
    const event = {
      preventDefault: jest.fn(),
      target: {
        files: [
          blob
        ]
      }
    };
    const wrapper = setUp();
    const profileImage = wrapper.find('#profileImage');

    profileImage.simulate('change', event);

    expect(wrapper.instance().state.profileImage).toBeDefined();
  });
  it('should return error for invalid form submission', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstname',
        value: ''
      }
    };
    const wrapper = setUp();
    const firstname = wrapper.find('#firstname');
    firstname.simulate('change', event);
    wrapper.find('#register').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.instance().state.errors).toEqual({});
  });
  it('should prevent the form submission', () => {
    const wrapper = setUp();
    let prevented = false;
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
});
