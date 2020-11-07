import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../typings/PlayerTypes';

import Inventory from '../components/hud/playerInventory';
import handleMovement from './handleMovement';
import walkSprite from '../../assets/walkSprite.png';

const mapStateToProps = (state: IState) => {
  return {
    ...state,
  };
};

const Player = (props: any) => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const showInventory = () => {
    setInventoryOpen(!inventoryOpen);
  };
  return (
    <div
      style={{
        position: 'absolute',
        top: props.player.position[0],
        left: props.player.position[1],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.player.spritePosition,
        width: '50px',
        height: '50px',
      }}
    >
      {/* <button onClick={showInventory}>Click</button> */}
      {inventoryOpen ? (
        <Inventory
          hp={props.player.hp}
          mp={props.player.mp}
          inventorySlots={props.player.inventorySlots}
        />
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps)(handleMovement(Player));
