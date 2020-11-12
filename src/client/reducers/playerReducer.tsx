import * as types from '../constants/actionTypes';

import { IPlayerState } from '../../typings/PlayerTypes';

const playerState: IPlayerState = {
  hp: 100,
  mp: 150,
  position: [0, 0],
  playerMoved: false,
  playerAttacked: false,
  monsterAttacked: false,
  playerDied: false,
  monsterDied: false,
  spritePosition: '0px 0px',
  direction: 'EAST',
  walkIndex: 0,
  inventorySlots: 6,
};

const playerReducer = (state = playerState, action: any) => {
  switch (action.type) {
    case types.MONSTER_DIED:
      // trigger monster's death sound
      return { ...state, monsterDied: !state.monsterDied };

    case types.PLAYER_DIED:
      // trigger player's death sound
      return { ...state, playerDied: !state.playerDied };

    case types.MONSTER_ATTACK:
      // trigger monster's attack animation on player
      return { ...state, monsterAttacked: !state.monsterAttacked };

    case types.PLAYER_ATTACK:
      // trigger attack animation
      return { ...state, playerAttacked: !state.playerAttacked };

    case types.MOVE_PLAYER:
      return {
        ...action.payload,
      };

    case types.TAKE_DAMAGE:
      const updatedHP = state.hp - 10;
      return {
        ...state,
        hp: updatedHP,
      };

    case types.RESET:
      return playerState;

    default:
      return state;
  }
};

export default playerReducer;
