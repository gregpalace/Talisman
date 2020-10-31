import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapTile from '../../../src/client/components/MapTile';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<MapTile />);
  });

  describe('<MapRow />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
