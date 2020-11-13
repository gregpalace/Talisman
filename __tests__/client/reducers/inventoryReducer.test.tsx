import subject from '../../../src/client/reducers/inventoryReducer';

describe('Inventory reducer tests', () => {
  let state: any;

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
});
