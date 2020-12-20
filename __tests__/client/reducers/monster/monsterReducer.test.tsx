import subject from '../../../../src/client/reducers/monsters/monsterReducer';
import { IMonsterState } from '../../../../src/typings/ReducerTypes';

describe('Stats reducer tests', () => {
  let state: IMonsterState;

  state = {
    config: {},
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

  describe('RESET', () => {
    it('should return initial state when game is reset', () => {
      const action = { type: 'RESET' };
      expect(subject(state, action)).toMatchObject(state);
    });
  });
});
