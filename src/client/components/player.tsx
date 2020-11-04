import React, { FC } from 'react';
import { connect } from 'react-redux';

import handleMovement from './handleMovement';
import walkSprite from '../../assets/walkSprite.png';

interface IState {
  readonly map: IMapState;
  readonly player: IPlayerState;
}

interface IMapState {
  readonly tiles: number[];
}
interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly inventorySlots: number;
  readonly position: number[];
  readonly direction: string;
  readonly spritePosition: string;
  readonly walkIndex: number;
}

const mapStateToProps = (state: IState) => {
  return {
    ...state,
  };
};

const Player: React.FC<IState> = (props) => {
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
