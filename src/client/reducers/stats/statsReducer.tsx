import _cloneDeep from 'lodash.clonedeep';

import * as types from '../../constants/actionTypes';

import { IAction } from '../../../typings/ActionTypes';
import { IStatsState } from '../../../typings/ReducerTypes';

const initialState: IStatsState = {
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

const statsReducer = (state = initialState, action: IAction) => {
  let newState;

  switch (action.type) {
    case types.GET_COINS:
      return { ...state, coins: state.coins + action.payload };

    case types.LOSE_COINS:
      return { ...state, coins: state.coins - action.payload };

    case types.HEAL:
      return healPlayer();

    case types.TAKE_DAMAGE:
      return { ...state, hp: state.hp - action.payload };

    case types.GET_EXP:
      return getExp();

    case types.RESET:
      return initialState;

    default:
      return state;
  }

  // Extract Reducer Methods:
  function healPlayer() {
    // declare var to represent hit points after healing
    let newHp = state.hp + action.payload;
    // Prevent overhealing
    if (newHp > state.maxHp) newHp = state.maxHp;
    // return updated HP
    return { ...state, hp: newHp };
  }

  function getExp() {
    // clone our state object
    newState = _cloneDeep(state);
    const newExpTotal = state.exp + action.payload;
    // destructure exp from initial state
    const { expToNxtLevel } = state;
    // if they are leveling up
    if (newExpTotal >= expToNxtLevel) {
      // increment level
      newState.level += 1;
    }
    // calculate leftover exp if it isn't exactly enough
    if (!(newState.exp === expToNxtLevel)) {
      const leftoverExp = newExpTotal % expToNxtLevel;
      newState.exp = leftoverExp;

      // set next exp goal to be 1.5 times as much if player is 5 or less
      if (newState.level < 6) {
        newState.expToNxtLevel = Math.floor(state.expToNxtLevel * 1.5);
      } // otherwise set it to be 1.25 times as much
      else if (newState.level < 20) {
        newState.expToNxtLevel = Math.floor(state.expToNxtLevel * 1.25);
      } else {
      } // let the exp goal remain static if they are lv 20+

      // get more maxHp and currHp (roll 1-5)
      const moreHp = Math.floor(Math.random() * 5) + 1;
      newState.hp += moreHp;
      newState.maxHp += moreHp;
      newState.levelUp.hp = moreHp;

      // get more damage (+1)
      let moreDmg = 1;
      // 25% chance to get +2 damage on lv
      const chance = Math.floor(Math.random() * 100) + 1;
      if (chance <= 25) {
        moreDmg += 1;
      }
      newState.hp += moreHp;
      newState.maxHp += moreHp;
      newState.levelUp.hp = moreHp;
    } else {
      // They are not leveling up
      newState.exp += action.payload;
    }
  }
};

export default statsReducer;
