import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IState, IPlayerState } from '../../typings/PlayerTypes';

import handleMovement from './handleMovement';
import walkSprite from '../../assets/walkSprite.png';

const mapStateToProps = (state: IState) => ({
  position: state.player.position,
  spritePosition: state.player.spritePosition,
});

export const Player = ({ position, spritePosition }: IPlayerState) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: position[0],
        left: position[1],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: spritePosition,
        width: '50px',
        height: '50px',
      }}
    />
  );
};

export default connect(mapStateToProps)(handleMovement(Player));
