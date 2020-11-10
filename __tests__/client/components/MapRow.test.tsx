import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapRow from '../../../src/client/components/MapRow';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    tiles: [],
  };

  beforeEach(() => {
    wrapper = shallow(<MapRow {...props} />);
  });

  describe('<MapRow />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
