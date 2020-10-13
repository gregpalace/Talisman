import React from 'react';

import MapRow from './MapRow';

const Map = (props: any) => {
  return (
    <div
    style={{
      width: '1000px',
      height: '500px',
      backgroundColor: 'black',
      border: '4px solid black',
      margin: '10px auto',
    }}
    >
      {props.tiles.map((row: any, index: number) => <MapRow key={index} tiles={row} />)}
    </div>
  );
}


export default Map;