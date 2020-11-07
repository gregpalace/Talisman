import * as types from '../constants/actionTypes';

import { IPlayerState } from '../../typings/ReducerTypes';

const playerState: IPlayerState = {
  hp: 100,
  mp: 150,
  position: [0, 0],
  spritePosition: '0px 0px',
  direction: 'EAST',
  walkIndex: 0,
  inventorySlots: 10,
};

const playerReducer = (state = playerState, action: any) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default playerReducer;
