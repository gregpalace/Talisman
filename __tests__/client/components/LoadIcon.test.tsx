import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoadIcon from '../../../src/client/components/LoadIcon';

describe('React unit tests', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = shallow(<LoadIcon />);
  });

  describe('<LoadIcon />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a div with className of "loading"', () => {
      expect(wrapper.find('div')).toBeDefined();
      expect(wrapper.find('div').prop('className')).toEqual('loading');
    });
  });
});
