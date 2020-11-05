import React from 'react';

import '../../../stylesheets/HUD-Styles/playerInventory.scss';

interface IInventory {
  hp: number;
  mp: number;
  inventorySlots: number;
}

const Inventory = (props: IInventory) => {
  return (
    <div id='player-inventory'>
      <main id='player-stats'>
        <table id='player-table'>
          <thead>Player Stats:</thead>
          <td>Level: 5</td>
          <td>HP: {props.hp}</td>
          <td>MP: {props.mp}</td>
        </table>
      </main>
      <aside id='inventory-items'>
        <table id='items-table'>
          <thead>Items:</thead>
          <tr>Consumables</tr>
          <td className='items'>Potion x2</td>
          <td className='items'>Hi-Potion x3</td>
          <td className='items'>Rare Candy x3</td>
        </table>
      </aside>
      <hr />
      <footer className='inventory-slots'>
        <h4 className='slots'>Slots Available: {props.inventorySlots}</h4>
      </footer>
    </div>
  );
};

export default Inventory;
