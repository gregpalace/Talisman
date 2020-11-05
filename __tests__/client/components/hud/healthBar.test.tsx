import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HealthBar from '../../../../src/client/components/hud/healthBar';
import Filler from '../../../../src/client/components/hud/Filler';
import { wrap } from 'module';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    percentage: 50,
  };
  beforeAll(() => {
    wrapper = shallow(<HealthBar {...props} />);
  });

  describe('HealthBar />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render a <div/> with className of health-bar', () => {
      expect(wrapper.find('div').prop('className')).toBe('health-bar');
    });
    it('should render a <Filler /> component', () => {
      expect(wrapper.find(Filler)).toBeDefined();
      expect(wrapper.find(Filler).prop('percentage')).toBe(50);
    });
  });
});
