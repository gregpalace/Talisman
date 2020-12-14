import * as types from '../../../constants/actionTypes';

export default function unequipItem(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: types.UNEQUIP_ITEM,
      payload: item,
    });
  };
}
