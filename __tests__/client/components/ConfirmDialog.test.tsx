import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConfirmDialog from '../../../src/client/components/ConfirmDialog';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ConfirmDialog />);
  });

  describe('<ConfirmDialog />', () => {
    it('should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
