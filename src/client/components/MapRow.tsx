import React from 'react';

import MapTile from './MapTile';

const MapRow = (props: any) => {
  return (
    <div className="rows">
      { props.tiles.map((tile: any, index: number) => <MapTile key={index} tile={tile} />) }
    </div>
  );
}

export default MapRow;