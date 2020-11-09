import React from 'react';
import { connect } from 'react-redux';

import HealthBar from '../components/hud/healthBar';
import MagicBar from '../components/hud/magicBar';

import '../../stylesheets/HUD-Styles/hudItems.scss';
import { IState } from '../../typings/PlayerTypes';

const mapStateToProps = (state: IState) => ({
  position: state.player.position,
  hp: state.player.hp,
  mp: state.player.mp,
  tiles: state.map.tiles,
  percentage: state.player.hp,
});

const HudItems = (props: any) => {
  return (
    <div id='hud-items'>
      <HealthBar hp={props.hp} percentage={props.percentage} />
      <MagicBar mp={props.mp} percentage={props.percentage} />
    </div>
  );
};

export default connect(mapStateToProps)(HudItems);
