import React from 'react';
import { connect } from 'react-redux';
import EmptySlot from './emptySlot';

import { IInventory } from '../../../typings/HUDTypes';
import * as types from '../../constants/actionTypes';

import '../../../stylesheets/HUD-Styles/playerInventory.scss';

const Inventory = ({ hp, mp, inventorySlots }: IInventory) => {
  const slots = new Array(types.INVENTORY_SLOTS).fill(null);
  const itemSlots = slots.map((el) => {
    el === null;
  });

  return (
    <div id='player-inventory'>
      <ul id='player-table'>
        <li>Level: 5</li>
        <li>HP: {hp}</li>
        <li>MP: {mp}</li>
      </ul>
      <aside id='inventory-items'>
        <section className='items'>
          <EmptySlot>{itemSlots[0]}</EmptySlot>
          <EmptySlot>{itemSlots[1]}</EmptySlot>
          <EmptySlot>{itemSlots[2]}</EmptySlot>
        </section>
        <section className='items'>
          <EmptySlot>{itemSlots[4]}</EmptySlot>
          <EmptySlot>{itemSlots[5]}</EmptySlot>
          <EmptySlot>{itemSlots[6]}</EmptySlot>
        </section>
      </aside>
      <hr />
      <footer className='inventory-slots'>
        <h4 className='slots'>Slots Available: {inventorySlots}</h4>
      </footer>
    </div>
  );
};

export default Inventory;
