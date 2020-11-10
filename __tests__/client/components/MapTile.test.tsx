import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapTile from '../../../src/client/components/MapTile';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    tile: 0,
  };

  beforeEach(() => {
    wrapper = shallow(<MapTile {...props} />);
  });

  describe('<MapRow />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
