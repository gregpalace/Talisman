import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Splash from '../../../src/client/components/Splash';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    setFirstVisit: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Splash {...props} />);
  });

  describe('<Splash/>', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
