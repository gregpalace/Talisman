import * as types from '../../../constants/actionTypes';

export default function consumePotion(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: types.HEAL,
      payload: item.hp,
    });
    // drop potion once consumed
    dispatch({
      type: types.DROP_ITEM,
      payload: item,
    });
  };
}
