import * as types from '../constants/actionTypes';
import _cloneDeep from 'lodash.clonedeep';
import serializer from '../../utils/serialize-items';

import { IInventoryState } from '../../typings/ReducerTypes';

const initialState: IInventoryState = {
  items: [],
  maxItems: types.MAX_ITEMS,
};

const inventoryReducer = (state = initialState, action: any) => {
  let newState;
  let newItems = state.items;

  switch (action.type) {
    case types.DROP_ITEM:
      newItems.slice();
      newItems.forEach((itemData: any, index: number) => {
        if (JSON.stringify(itemData) === JSON.stringify(action.payload)) {
          // remove it from the array
          return newItems.splice(index, 1);
        }
        return false;
      });
      return { ...state, items: newItems };

    // case types.GET_ITEM:
    //   // Copy of our items array
    //   newState = _cloneDeep(state);
    //   // push new contents into the copy of our items array
    //   newState.items.push({ ...action.payload, id: serializer() });
    //   return newState;

    case types.UPGRADE_BACKPACK:
      return {
        ...state,
        maxItems: state.maxItems + action.payload.slots,
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default inventoryReducer;
