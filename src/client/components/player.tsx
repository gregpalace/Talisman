import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../typings/PlayerTypes';

import handleMovement from './handleMovement';
import walkSprite from '../../assets/walkSprite.png';

const mapStateToProps = (state: IState) => {
  return {
    ...state,
  };
};

export const Player = (props: any) => {
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
    />
  );
};

export default connect(mapStateToProps)(handleMovement(Player));
