import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Filler from '../../../../src/client/components/hud/Filler';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    hp: 100,
    percentage: 50,
  };
  beforeAll(() => {
    wrapper = shallow(<Filler {...props} />);
  });

  describe('Filler />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render a <div/> with className of filler', () => {
      expect(wrapper.find('div').prop('className')).toBe('filler');
    });
    it('should render a style property with percentage prop', () => {
      expect(wrapper.find('div').prop('style')).toBeDefined();
    });
  });
});
