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
  readonly tiles: number[];
}

interface IMapProps {
  dispatch: Dispatch<any>;
  tiles: any[];
}

const mapStateToProps = (state: IMapState) => {
  return {
    tiles: state.map.tiles,
  };
};
const Map: React.FC<IMapProps> = (props) => {
  return (
    <div
      style={{
        width: '1000px',
        height: '500px',
        backgroundColor: 'green',
        border: '4px solid black',
        margin: '10px auto',
      }}
    >
      {props.tiles.map((row: number[], index: number) => (
        <MapRow key={index} tiles={row} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Map);
