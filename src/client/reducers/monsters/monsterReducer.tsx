import * as types from '../../constants/actionTypes';

import _cloneDeep from 'lodash.clonedeep';

import { IMonsterState } from '../../../typings/ReducerTypes';

const initialState: IMonsterState = {
  config: {},
};

const monsterReducer = (state = initialState, action: any) => {
  let newState: any;

  switch (action.type) {
    case types.MOVE_MONSTER:
      newState = _cloneDeep(state);

      newState.config[action.payload.map][action.payload.id].position =
        action.payload.position;

      return newState;

    case types.DAMAGE_TO_MONSTER:
      newState = _cloneDeep(state);
      // subtract the damage from monster hp
      newState.config[action.payload.map][action.payload.id].hp -=
        action.payload.damage;
      // if monster has 0 or less hp, kill it
      if (newState.config[action.payload.map][action.payload.id].hp <= 0) {
        delete newState.config[action.payload.map][action.payload.id];
      }

      return newState;

    case types.SHOW_MONSTER:
      newState = _cloneDeep(state);

      newState.config[action.payload.map][action.payload.id].visible = true;
      return newState;

    case types.HIDE_MONSTER:
      newState = _cloneDeep(state);

      newState.config[action.payload.map][action.payload.id].visible = false;
      return newState;

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default monsterReducer;
