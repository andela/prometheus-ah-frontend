import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ArticlesComponent from '../components/articles/Articles';

const mockStore = configureMockStore();
const store = mockStore({});
Enzyme.configure({ adapter: new Adapter() });

describe('Articles Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ArticlesComponent />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.articles')).toBeDefined();
  });
});
