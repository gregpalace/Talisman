import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from '../../../src/client/components/Footer';

describe('React unit tests', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  describe('<Footer />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a <footer/> with information about the game', () => {
      expect(wrapper.find('footer')).toBeDefined();
      expect(wrapper.find('span').text()).toBe('Talisman ~ v1 ');
      expect(wrapper.find('a').prop('className')).toBe('footer-link');
      expect(wrapper.find('a').text()).toBe('View on Github');
    });
  });
});
