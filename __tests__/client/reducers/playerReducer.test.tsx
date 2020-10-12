import subject from '../../../src/client/reducers/playerReducer';
import handleMovement from '../../../src/client/components/handleMovement';

interface IState {
  readonly hp: number,
  readonly mp: number,
  readonly position: number[],
  readonly inventorySlots: number,
}


describe('Player reducer tests', () => {
  let state: IState;

  state = {
    hp: 100,
    mp: 150,
    position: [0,0],
    inventorySlots: 10
  }

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
