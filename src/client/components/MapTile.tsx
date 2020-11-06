import React from 'react';

import { SPRITE_SIZE } from '../constants/actionTypes';
import '../../stylesheets/tiles.scss';

interface IMapTile {
  tile: number;
}

const MapTile: React.FC<IMapTile> = (props) => {
  const getTileSprite = (type: number | null) => {
    switch (type) {
      case 0:
        return 'grass';
      case 1:
        return 'tree';
      case 5:
        return 'rock';
      default:
        return null;
    }
  };

  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    >
      {props.tile}
    </div>
  );
};

export default MapTile;
