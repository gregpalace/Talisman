import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../../../src/client/components/Button';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  describe('<Button />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a button with icon and span tags', () => {
      expect(wrapper.find('button')).toBeDefined();
      expect(wrapper.find('button').prop('className')).toEqual(
        'button__container white-border'
      );
    });
  });
});
