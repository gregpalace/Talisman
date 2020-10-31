import subject from '../../../src/client/reducers/mapReducer';
import handleMovement from '../../../src/client/components/handleMovement';

interface IState {
  readonly tiles: number[];
}

describe('Map reducer tests', () => {
  let state: IState;

  state = {
    tiles: [],
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
