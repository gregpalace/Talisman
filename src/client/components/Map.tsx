import { relative } from 'path';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import MapRow from './MapRow';

interface IMapState {
  readonly map: IMapState;
  readonly player: IPlayerState;
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

interface IMapState {
  readonly Map1: number[];
}

interface IMapProps {
  dispatch: Dispatch<any>;
  tiles: any[];
}

const mapStateToProps = (state: IMapState) => {
  return {
    tiles: state.map.Map1,
  };
};
const Map: React.FC<IMapProps> = ({ tiles }) => {
  return (
    <div
      style={{
        position: 'relative',
        right: '325px',
        width: '800px', // 800
        // height: '480px', // 480
        backgroundColor: 'green',
        border: '1px solid black',
      }}
    >
      {tiles.map((row: number[], index: number) => (
        <MapRow key={index} tiles={row} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Map);
