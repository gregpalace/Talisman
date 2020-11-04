import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';
import Player from '../components/Player';
import { tiles } from '../../data/maps/1/map1';
import store from '../../store';

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
    position: state.player.position,
    tiles: state.map.tiles,
  };
};

interface IWorldProps {
  dispatch: Dispatch<any>;
  position: number[];
  tiles: number[];
}

const World: React.FC<IWorldProps> = () => {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles,
    },
  });
  return (
    <div
      style={{
        position: 'relative',
        width: '1000px',
        height: '500px',
        margin: '20px auto',
      }}
    >
      <Map />
      <Player />
    </div>
  );
};

export default connect(mapStateToProps)(World);
