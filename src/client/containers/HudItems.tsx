import React, { useState } from 'react';
import { connect } from 'react-redux';

import HealthBar from '../components/hud/healthBar';
import MagicBar from '../components/hud/magicBar';
import Inventory from '../components/hud/Inventory';

import '../../stylesheets/HUD-Styles/hudItems.scss';
import { IState } from '../../typings/PlayerTypes';

const mapStateToProps = (state: IState) => ({
  hp: state.player.hp,
  mp: state.player.mp,
  percentage: state.player.hp,
  inventorySlots: state.player.inventorySlots,
});

export const HudItems = ({ hp, mp, inventorySlots, percentage }: any) => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const showInventory = () => {
    setInventoryOpen(!inventoryOpen);
  };

  return (
    <div id='hud-items'>
      <HealthBar hp={hp} percentage={percentage} />
      <MagicBar mp={mp} percentage={percentage} />
      {inventoryOpen ? (
        <Inventory hp={hp} mp={mp} inventorySlots={inventorySlots} />
      ) : null}
      <button id='inventory-button' onClick={showInventory}>
        Show Inventory
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(HudItems);
