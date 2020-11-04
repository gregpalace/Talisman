import subject from '../../../src/client/reducers/playerReducer';
import handleMovement from '../../../src/client/components/handleMovement';

describe('Player reducer tests', () => {
  let state: any;

  state = {
    hp: 100,
    mp: 150,
    position: [0, 0],
    spritePosition: '0px 0px',
    direction: 'east',
    walkIndex: 0,
    inventorySlots: 10,
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

  describe('MOVE_PLAYER', () => {
    const action = {
      type: 'MOVE_PLAYER',
      payload: {
        position: [0, 10],
        direction: 'east',
        walkIndex: 0,
        spritePosition: '10 30',
      },
    };
    it("should update player's position", () => {
      const position = subject(state, action).position;
      expect(position).toEqual([0, 10]);
    });
    it('should update cardinal direction', () => {
      const direction = subject(state, action).direction;
      expect(direction).toBe('east');
    });
    it("should update the player's walkIndex", () => {
      const walkIndex = subject(state, action).walkIndex;
      expect(walkIndex).toBe(0);
    });
    it('should render the sprites position in pixels', () => {
      const spritePosition = subject(state, action).spritePosition;
      expect(spritePosition).toBe('10 30');
    });
  });
});
