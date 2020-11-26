import subject from '../../../src/client/reducers/inventoryReducer';

import HuntersCap from '../../../src/data/items/armor/hunters-cap';
import LeatherArmor from '../../../src/data/items/armor/leather-armor';
import LeatherBoots from '../../../src/data/items/armor/leather-boots';
import LeatherGloves from '.../../../src/data/items/armor/leather-gloves';
import RustySword from '../../../src/data/items/weapons/rusty-sword';
import { IInventoryState } from '../../../src/typings/ReducerTypes';

describe('Inventory reducer tests', () => {
  let state: IInventoryState;

  state = {
    items: [],
    maxItems: 6,
  };

  describe('Reducer main functionality', () => {
    it('should return default state when given undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
    it('should return a default state when given an undefined action', () => {
      const action = { type: 'This is a test!' };
      expect(subject(state, action)).toEqual(state);
    });
  });

  describe('DROP_ITEM', () => {
    let action: any;
    let items: any;

    beforeEach(() => {
      state = {
        items: [
          RustySword,
          LeatherArmor,
          LeatherBoots,
          HuntersCap,
          LeatherGloves,
        ],
        maxItems: 6,
      };
      action = {
        type: 'DROP_ITEM',
        payload: LeatherBoots,
      };
    });

    it('should update the total number of items the player is carrying', () => {
      const items = subject(state, action).items;
      expect(items).not.toContain(LeatherBoots);
      expect(items.length).toEqual(4);
      expect(items[0]).toBe(RustySword);
      expect(items[1]).toBe(LeatherArmor);
      expect(items[2]).toBe(HuntersCap);
      expect(items[3]).toBe(LeatherGloves);
    });
  });

  describe('UPGRADE_BACKPACK', () => {
    it('should upgrade the total number of usable slots', () => {
      const action = {
        type: 'UPGRADE_BACKPACK',
        payload: { upgrade: 'newLevel', slots: 1 },
      };
      expect(subject(state, action).maxItems).toEqual(7);
    });
  });

  describe('RESET', () => {
    let state: any;

    beforeEach(() => {
      state = {
        items: [],
        maxItems: 6,
      };
    });

    it('should return initial state when game is reset', () => {
      const action = { type: 'RESET' };
      expect(subject(state, action)).toMatchObject(state);
    });
  });
});
