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

  describe('GET_COINS', () => {
    it('should update total number of coins in players inventory', () => {
      const action = { type: 'GET_COINS', payload: 200 };
      expect(subject(state, action).coins).toEqual(250);
    });
  });

  describe('LOSE_COINS', () => {
    it('should reduce the total number of coins from the player', () => {
      const action = { type: 'LOSE_COINS', payload: 50 };
      expect(subject(state, action).coins).toEqual(0);
    });
  });

  describe('HEAL', () => {
    let action: any;

    beforeEach(() => {
      state = {
        hp: 10,
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
      action = {
        type: 'HEAL',
        payload: 40,
      };
    });

    it('should update a players health when potion is consumed', () => {
      expect(subject(state, action).hp).toBe(50);
    });

    it('should prevent overhealing', () => {
      action = { type: 'HEAL', payload: 100 };
      expect(subject(state, action).hp).toEqual(100);
    });
  });

  describe('TAKE_DAMAGE', () => {
    let action: any;

    beforeEach(() => {
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
      action = {
        type: 'TAKE_DAMAGE',
        payload: 10,
      };
    });

    it('should update a players health when damage is inflicted', () => {
      expect(subject(state, action).hp).toEqual(90);
    });
  });

  describe('GET_EXP', () => {
    it('should update a players exp count', () => {
      const action = { type: 'GET_EXP', payload: 10 };
      expect(subject(state, action).exp).toEqual(10);
    });
    it('should update a players level count when exp exceeds expToNxtLevel', () => {
      const action = { type: 'GET_EXP', payload: 50 };
      expect(subject(state, action).level).toEqual(6);
    });
  });

  describe('RESET', () => {
    it('should return initial state when game is reset', () => {
      const action = { type: 'RESET' };
      expect(subject(state, action)).toMatchObject(state);
    });
  });
});
