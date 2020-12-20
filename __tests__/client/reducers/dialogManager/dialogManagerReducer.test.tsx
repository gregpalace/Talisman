import subject from '../../../../src/client/reducers/dialogManager/dialogManagerReducer';
import { IDialog } from '../../../../src/typings/ReducerTypes';

describe('Dialog reducer tests', () => {
  let state: IDialog;

  state = {
    gameText: false,
    gameOver: false,
    gameStart: true,
    gameInstructions: false,
    gameSelect: null,
    gameWin: false,
    paused: true,
    chest: false,
    chestOpen: false,
    shop: false,
    settings: false,
    inventory: false,
    levelUp: false,
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

  describe('PAUSE', () => {
    it('should update inventory state when toggling inventory', () => {
      const action = {
        type: 'PAUSE',
        payload: { pause: true, inventory: true },
      };
      expect(subject(state, action).inventory).toEqual(true);
      expect(subject(state, action).paused).toEqual(true);
    });
  });

  describe('CLOSE_SETTINGS', () => {
    it('should successfully toggle the settings menu state', () => {
      const action = { type: 'CLOSE_SETTINGS' };
      expect(subject(state, action).settings).toEqual(false);
    });
  });

  describe('OPEN_SETTINGS', () => {
    it('should successfully toggle the settings menu state', () => {
      const action = { type: 'OPEN_SETTINGS' };
      expect(subject(state, action).settings).toEqual(true);
    });
  });

  describe('RESET', () => {
    it('should return initial state when game is reset', () => {
      const action = { type: 'RESET' };
      expect(subject(state, action)).toMatchObject(state);
    });
  });
});
