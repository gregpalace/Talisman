import React, { useState } from 'react';

import Backpack from '../../assets/tiles/backpack.png';
import Inventory from './hud/Inventory';
import Dialog from './Dialog';

import '../../stylesheets/inventory-dialog.scss';
import { IInventory } from '../../typings/HUDTypes';

const InventoryDialog = ({ hp, mp, inventorySlots }: IInventory) => {
  const [viewItem, setViewItem] = useState(false);

  return (
    <Dialog>
      <div className='flex-row inventory-dialog__container'>
        <div
          className='flex-column inventory-dialog__child'
          style={{ width: '40%' }}
        ></div>

        <div
          className='flex-column inventory-dialog__child'
          style={{ width: '60%' }}
        >
          <div
            className='inventory-dialog__backpack'
            style={{ backgroundImage: `url(${Backpack})` }}
          >
            <Inventory hp={hp} mp={mp} inventorySlots={inventorySlots} />
          </div>
        </div>
        <button>Toggle</button>
      </div>
    </Dialog>
  );
};

export default InventoryDialog;
