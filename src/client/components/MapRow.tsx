import React from 'react';

import MapTile from './MapTile';

interface IMapRow {
  tiles: number[];
}

const MapRow: React.FC<IMapRow> = (props) => {
  return (
    <div className='rows'>
      {props.tiles.map((tile: number, index: number) => (
        <MapTile key={index} tile={tile} />
      ))}
    </div>
  );
};

export default MapRow;
