import subject from '../../../src/client/reducers/mapReducer';
import handleMovement from '../../../src/client/components/handleMovement';

describe('Map reducer tests', () => {
  let state: any;

  state = {
    tiles: [],
  };

  describe('default state', () => {
    it('should return default state when given undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return a default state when given an undefined action', () => {
      const action = { type: 'This is a test!' };
      expect(subject(state, action)).toEqual(state);
    });
  });

  describe('ADD_TILES', () => {
    it('should add the appropriate map tiles to the page', () => {
      const action = {
        type: 'ADD_TILES',
        payload: {
          tiles: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 5],
          ],
        },
      };
      const tileArray = subject(state, action).tiles;
      expect(tileArray.length).toEqual(3);
      expect(tileArray[2][2]).toEqual(1);
      expect(tileArray[2][3]).toEqual(5);
    });
  });
});
