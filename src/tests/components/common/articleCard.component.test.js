import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleCard from '../../../components/common/ArticleCard';

Enzyme.configure({ adapter: new Adapter() });

const article = {
  article: {
    title: 'codeing is fun',
    body: 'Why code in PHP',
    User: {
      firstname: 'Mocha',
      lastname: 'Chai'
    },
    Tags: [
      {
        name: 'testing'
      }
    ]
  }
};
describe(' Textfield Component', () => {
  it('should ', () => {
    const wrapper = shallow(<ArticleCard {...article} />);
    expect(wrapper.exists()).toBe(true);
  });
});
