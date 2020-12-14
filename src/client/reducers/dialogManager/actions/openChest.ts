import * as types from '../../../constants/actionTypes';

import { IState } from '../../../../typings/PlayerTypes';

export function openChest() {
  return (dispatch: any, getState: () => IState) => {
    const { stats } = getState();
    const { level, expToNxtLevel } = stats;
    // get a random amount of gold between 1 and 8 PLUS player level x3
    const coins = Math.floor(Math.random() * 8) + 1 + level * 3;
    // get some level based exp
    const exp = level * 5 + 5;

    dispatch({
      type: types.GET_COINS,
      payload: coins,
    });
    dispatch({
      type: types.GET_EXP,
      payload: exp,
    });
    dispatch({
      type: types.SET_CHEST_DATA,
      payload: {
        exp,
        coins,
      },
    });
    if (exp + stats.exp >= expToNxtLevel) {
      dispatch({
        type: types.PAUSE,
        payload: {
          pause: true,
          levelUp: true,
          chest: true,
        },
      });
    }
  };
}
