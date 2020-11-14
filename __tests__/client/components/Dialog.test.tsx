import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dialog from '../../../src/client/components/Dialog';

describe('React Unit Tests', () => {
  let wrapper: any;

  const props = {
    goBack: true,
    onKeyPress: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Dialog {...props} />);
  });

  describe('<Shop />', () => {
    xit('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a div with a back button', () => {
      expect(wrapper.find('div')).toBeDefined();
      expect(wrapper.find('button').prop('className')).toEqual(
        'dialog__back-button'
      );
    });

    it('should exit out of the current dialog window', () => {
      let button = wrapper.find('button');
      expect(button).toBeInstanceOf(Function);
    });
  });
});
