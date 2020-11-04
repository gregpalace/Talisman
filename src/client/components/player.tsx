import React from 'react';
import { connect } from 'react-redux';

import handleMovement from './handleMovement';
import walkSprite from '../../assets/walkSprite.png';

const Player = (props: any) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.player.position[0],
        left: props.player.position[1],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.player.spriteLocation,
        width: '50px',
        height: '50px',
      }}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(handleMovement(Player));
// export default Player;
