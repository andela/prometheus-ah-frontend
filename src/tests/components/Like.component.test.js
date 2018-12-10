import React from 'react';
import { shallow } from 'enzyme';
import Like from '../../components/Like';

let wrapper;

describe('Like', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Like />
    );
  });

  test('should correctly Like component ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
