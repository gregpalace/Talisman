import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Player from '../../../src/client/components/Player';
import Map from '../../../src/client/components/Map';
import { World } from '../../../src/client/containers/World';
import HudItems from '../../../src/client/containers/HudItems';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    position: [100, 50],
    hp: 100,
    tiles: [0, 1, 3, 4, 3],
    percentage: 100,
    takeDamage: Function,
  };

  beforeEach(() => {
    wrapper = shallow(<World {...props} />);
  });

  describe('<World />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render a wrapper with styling properties', () => {
      expect(wrapper.find('style')).toBeTruthy();
      expect(wrapper.prop('style').width).toEqual('1000px');
      expect(wrapper.prop('style').height).toEqual('500px');
    });

    it('should render <Map /> and <Player /> and <Hud /> components', () => {
      expect(wrapper.find(Map)).toBeDefined();
      expect(wrapper.find(HudItems)).toBeDefined();
      expect(wrapper.find(Player)).toBeDefined();
    });
  });
});
