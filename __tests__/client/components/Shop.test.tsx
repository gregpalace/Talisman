import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Shop from '../../../src/client/components/Shop';

describe('React Unit Tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Shop />);
  });

  describe('<Shop />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
