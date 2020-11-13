import React from 'react';

import HealthBar from './hud/healthBar';

const Monster = ({ monster }: any) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: monster.position[1],
        left: monster.position[0],
        backgroundImage: `url('${monster.sprite}')`,
        opacity: monster.visible ? 1 : 0,
        width: '40px',
        height: '40px',
        transition:
          'left .35s ease-in-out .15s, top .35s ease-in-out .15s, opacity .35s ease-in-out',
      }}
    >
      <HealthBar hp={monster.hp} percentage={monster.maxHp} />
    </div>
  );
};

export default Monster;
