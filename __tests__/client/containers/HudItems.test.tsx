import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HealthBar from '../../../src/client/components/hud/healthBar';
import MagicBar from '../../../src/client/components/hud/magicBar';
import { HudItems } from '../../../src/client/containers/HudItems';

describe('React unit tests', () => {
  let wrapper: any;
  const showInventory = jest.fn();

  const props = {
    hp: 100,
    mp: 100,
    percentage: 10,
  };

  beforeAll(() => {
    wrapper = shallow(<HudItems {...props} showInventory={showInventory} />);
  });

  describe('<HudItems />', () => {
    xit('should render correclty', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render a health and magic bar', () => {
      expect(wrapper.find(HealthBar)).toBeDefined();
      expect(wrapper.find(MagicBar)).toBeDefined();
    });
    it('should render a healthbar that displays a players health', () => {
      expect(wrapper.find(HealthBar).prop('hp')).toBe(100);
      expect(wrapper.find(HealthBar).prop('hp')).not.toBe(0);
    });
    it('should render a magic bar that displays a players magic', () => {
      expect(wrapper.find(MagicBar).prop('mp')).toBe(100);
      expect(wrapper.find(MagicBar).prop('mp')).not.toBe(0);
    });
    it('should render a show inventory button', () => {
      expect(wrapper.find('button').prop('id')).toBe('inventory-button');
      expect(wrapper.find('button').prop('onClick')).toBeInstanceOf(Function);
    });
    it('should open a modal when the show inventory button is clicked', () => {
      const button = wrapper.find('button');
      const mockCallBack = button.prop('showInventory');
    });
  });
});
