import * as types from '../../../constants/actionTypes';

export default function equipItem(item: any) {
  return (dispatch: any) => {
    dispatch({
      type: types.EQUIP_ITEM,
      payload: item,
    });
  };
}
