import React from 'react';

import '../../../stylesheets/HUD-Styles/playerInventory.scss';

const Inventory = (props: any) => {
  return (
    <div id='player-inventory'>
      <main id='player-stats'>
        <table id='player-table'>
          <thead>Player Stats:</thead>
          <ul>
            <li>Level: 5</li>
            <li>HP: {props.hp}</li>
            <li>MP: {props.mp}</li>
          </ul>
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
