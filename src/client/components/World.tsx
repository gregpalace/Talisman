import React from 'react';

import Map from './Map';
import Player from './Player';
import { tiles } from '../../data/maps/1/map1';

const World = (props: any) => {
  return (
    <div
    style={{
      position: 'relative',
      width: '1000px',
      height: '500px',
      margin: '20px auto'
    }}>
      <Map tiles={tiles} />
      <Player />
    </div>
  );
}

export default World;