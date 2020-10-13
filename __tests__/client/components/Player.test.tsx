import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Player from '../../../src/client/components/player';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Player />).dive();
  });

  describe('<Player />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

});