import * as types from '../../../constants/actionTypes';

export default function sellItem(item: any) {
  return (dispatch: any, getState: any) => {
    const sellPrice = Math.ceil(item.value / 2);

    dispatch({
      type: types.GET_COINS,
      payload: sellPrice,
    });

    dispatch({
      type: types.DROP_ITEM,
      payload: item,
    });

    const { equippedItems } = getState().stats;
    let itemEquipped = false;
    // check if the item was equipped, then take it off
    switch (item.type) {
      case 'weapon':
        if (JSON.stringify(equippedItems.weapon) === JSON.stringify(item))
          itemEquipped = true;
        break;
      case 'ring':
        if (JSON.stringify(equippedItems.ring) === JSON.stringify(item))
          itemEquipped = true;
        break;
      case 'armor::body':
        if (
          equippedItems.armor &&
          JSON.stringify(equippedItems.armor.body) === JSON.stringify(item)
        )
          itemEquipped = true;
        break;
      case 'armor::pants':
        if (
          equippedItems.armor &&
          JSON.stringify(equippedItems.armor.pants) === JSON.stringify(item)
        )
          itemEquipped = true;
        break;
      case 'armor::helmet':
        if (
          equippedItems.armor &&
          JSON.stringify(equippedItems.armor.helmet) === JSON.stringify(item)
        )
          itemEquipped = true;
        break;
      case 'armor::boots':
        if (
          equippedItems.armor &&
          JSON.stringify(equippedItems.armor.boots) === JSON.stringify(item)
        )
          itemEquipped = true;
        break;
      case 'armor::gloves':
        if (
          equippedItems.armor &&
          JSON.stringify(equippedItems.armor.gloves) === JSON.stringify(item)
        )
          itemEquipped = true;
        break;
      default:
    }

    if (itemEquipped) {
      dispatch({
        type: types.UNEQUIP_ITEM,
        payload: item,
      });
    }
  };
}
