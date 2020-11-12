import subject from '../../../src/client/reducers/statsReducer';

describe('Stats reducer tests', () => {
  let state: any;

  state = {
    hp: 100,
    maxHp: 100,
    damage: 4,
    defence: 1,
    level: 5,
    exp: 0,
    expToNxtLevel: 25,
    coins: 50,
    equippedItems: {},
    levelUp: { level: 0, hp: 0, dmg: 0 },
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
