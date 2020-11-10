import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Inventory from '../../../../src/client/components/hud/Inventory';
import EmptySlot from '../../../../src/client/components/hud/emptySlot';

describe('React unit tests', () => {
  let wrapper: any;

  const props = {
    hp: 130,
    mp: 230,
    inventorySlots: 1,
  };

  beforeEach(() => {
    wrapper = shallow(<Inventory {...props} />);
  });

  describe('<Inventory />', () => {
    xit('should render properly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render our players main inventory', () => {
      expect(wrapper.find('div').prop('id')).toBe('player-inventory');
    });

    it('should render a list of player stats', () => {
      const ul = wrapper.find('ul');
      expect(ul.prop('id')).toBe('player-table');
      ul.find('li').forEach((li: any, index: number) => {
        if (index === 0) {
          expect(li.text()).toBe('Level: 5');
        } else if (index === 1) {
          expect(li.text()).toBe('HP: 130');
        } else if (index === 2) {
          expect(li.text()).toBe('MP: 230');
        }
      });
    });

    it('should render an aside full of inventory items', () => {
      const aside = wrapper.find('aside');
      expect(aside).toBeDefined();
      expect(aside.prop('id')).toBe('inventory-items');
    });

    it('should render <EmptySlot /> components for a players inventory', () => {
      expect(wrapper.find(EmptySlot)).toBeDefined();
      expect(wrapper.find(EmptySlot).length).toEqual(6);
    });

    it('should render a <footer> containing inventory count', () => {
      const footer = wrapper.find('footer');
      expect(footer).toBeDefined();
      expect(footer.prop('className')).toBe('inventory-slots');
      expect(footer.find('h4'));
      expect(footer.find('h4').text()).toBe('Slots Available: 1');
    });
  });
});
