import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Inventory from '../../../../src/client/components/hud/playerInventory';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    hp: 100,
    mp: 234,
    inventorySlots: 3,
  };

  beforeEach(() => {
    wrapper = shallow(<Inventory {...props} />);
  });

  describe('<Inventory />', () => {
    it('Should render correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('Should render a <div> with ID of player-inventory', () => {
      expect(wrapper.find('div').prop('id')).toBe('player-inventory');
    });
    it('should render a <table/> containing player stats', () => {
      const table = wrapper.find('table');
      table.find('td').forEach((data: any, index: number) => {
        if (index === 0) {
          expect(data.text()).toBe('Level: 5');
        }
        if (index === 1) {
          expect(data.text()).toBe('HP: 100');
        }
        if (index === 2) {
          expect(data.text()).toBe('MP: 234');
        }
        if (index === 3) {
          expect(data.text()).toBe('Potion x2');
        }
      });
    });
    it('should contain a <footer/> detailing remaining slots', () => {
      const footer = wrapper.find('footer');
      expect(footer).toBeDefined();
      expect(footer.prop('className')).toBe('inventory-slots');
      expect(footer.find('h4').text()).toBe('Slots Available: 3');
    });
  });
});
