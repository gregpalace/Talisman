import * as types from '../../../constants/actionTypes';

export default function pickupItem() {
  return (dispatch: any, getState: any) => {
    const { inventory, dialog } = getState();

    const { item } = dialog.chestOpen;

    if (!item) return;

    const { items, maxItems } = inventory;

    if (items.length < maxItems) {
      dispatch({
        type: types.GET_ITEM,
        payload: item,
      });
    } else {
      dispatch({
        type: types.TOO_MANY_ITEMS,
        payload: item,
      });
    }
  };
}
