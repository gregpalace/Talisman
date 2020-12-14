import * as types from '../../../constants/actionTypes';

export default function buyItem(item: any) {
  return (dispatch: any, getState: any) => {
    const { stats, inventory } = getState();
    const { gold } = stats;
    const { items, maxItems } = inventory;

    // make sure player has enough gold
    if (gold >= item.value) {
      // if it's a backpack upgrade
      if (item.type === 'upgrade::backpack') {
        dispatch({
          type: types.LOSE_COINS,
          payload: item.value,
        });
        dispatch({
          type: types.UPGRADE_BACKPACK,
          payload: { slots: item.slots },
        });
      } // otherwise, see if there's room in the inventory
      else if (items.length < maxItems) {
        dispatch({
          type: types.LOSE_COINS,
          payload: item.value,
        });
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
    } else {
      dispatch({
        type: types.NOT_ENOUGH_COINS,
        payload: item,
      });
    }
  };
}
