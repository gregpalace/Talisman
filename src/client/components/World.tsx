import React from 'react';

import Map from './Map';
import Player from './Player';

const World = (props: any) => {
  return (
    <div
    style={{
      position: 'relative',
      width: '800px',
      height: '400px',
      margin: '20px auto'
    }}>
      <Map />
      <Player />
    </div>
  );
}

export default World;