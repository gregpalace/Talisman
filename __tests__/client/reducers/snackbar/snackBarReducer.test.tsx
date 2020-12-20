import { inherits } from 'util';
import subject from '../../../../src/client/reducers/snackBar/snackBarReducer';

describe('Redux reducer tests', () => {
  let state: any;
  let action: any;

  state = {
    notEnoughCoins: '',
    tooManyItems: '',
    itemDropped: '',
    itemReceived: '',
  };

  describe('Reducer main functionality', () => {
    it('should return default state when given undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  it('should return a default state when given an undefined action', () => {
    const action = { type: 'This is a test!' };
    expect(subject(state, action)).toEqual(state);
  });

  describe('NOT_ENOUGH_COINS', () => {
    beforeEach(() => {
      state = {
        notEnoughCoins: '',
        tooManyItems: '',
        itemDropped: '',
        itemReceived: '',
      };

      action = {
        type: 'NOT_ENOUGH_COINS',
        payload: {
          name: 'Big Item',
        },
      };
    });

    it('should update state to reflect player coins status', () => {
      expect(subject(state, action).notEnoughCoins).not.toEqual('');
      expect(subject(state, action).notEnoughCoins).toBeDefined();
      expect(subject(state, action).notEnoughCoins).toContain('Big Item');
      expect(subject(state, action).notEnoughCoins).toContain(
        new Date().getTime()
      );
    });
  });

  describe('TOO_MANY_ITEMS', () => {
    beforeEach(() => {
      state = {
        notEnoughCoins: '',
        tooManyItems: '',
        itemDropped: '',
        itemReceived: '',
      };

      action = {
        type: 'TOO_MANY_ITEMS',
        payload: {
          name: 'Hi-Potion',
        },
      };
    });

    it('should update state to reflect player coins status', () => {
      expect(subject(state, action).tooManyItems).not.toEqual('');
      expect(subject(state, action).tooManyItems).toBeDefined();
      expect(subject(state, action).tooManyItems).toContain('Hi-Potion');
      expect(subject(state, action).tooManyItems).toContain(
        new Date().getTime()
      );
    });
  });

  describe('DROP_ITEM', () => {
    beforeEach(() => {
      state = {
        notEnoughCoins: '',
        tooManyItems: '',
        itemDropped: '',
        itemReceived: '',
      };

      action = {
        type: 'DROP_ITEM',
        payload: {
          name: 'Rusty Sword',
        },
      };
    });

    it('should indicate dropped item and time', () => {
      expect(subject(state, action).itemDropped).not.toEqual('');
      expect(subject(state, action).itemDropped).toBeDefined();
      expect(subject(state, action).itemDropped).toContain('Rusty Sword');
      expect(subject(state, action).itemDropped).toContain(
        new Date().getTime()
      );
    });
  });

  describe('RESET', () => {
    it('should reset state back to initial settings', () => {
      const action = { type: 'RESET' };
      expect(subject(state, action)).toMatchObject(state);
    });
  });
});
