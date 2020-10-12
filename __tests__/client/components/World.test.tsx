import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Player from '../../../src/client/components/Player';
import Map from '../../../src/client/components/Map';
import World from '../../../src/client/components/World';

describe('React unit tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<World />);
  });

  describe('<World />', () => {

    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a wrapper with styling properties', () => {
      expect(wrapper.find('style')).toBeTruthy();
      expect(wrapper.prop('style').width).toEqual('800px');
      expect(wrapper.prop('style').height).toEqual('400px');
    });

    it('should render <Map /> and <Player /> components', () => {
      expect(wrapper.find(Map)).toBeDefined();
      expect(wrapper.find(Player)).toBeDefined();
    })
  });
});
