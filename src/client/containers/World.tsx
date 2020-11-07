import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import { IState } from '../../typings/PlayerTypes';
import Map from '../components/Map';
import Player from '../components/Player';
import HealthBar from '../components/hud/healthBar';
import { tiles } from '../../data/maps/1/map1';
import store from '../../store';

const mapStateToProps = (state: IState) => ({
  position: state.player.position,
  tiles: state.map.tiles,
  percentage: state.player.hp,
});

const mapDispatchToProps = (dispatch: any) => ({
  takeDamage: () => dispatch(actions.takeDamage()),
});

interface IWorldProps {
  position: number[];
  tiles: number[];
  percentage: number;
  takeDamage: any;
}

const World = (props: IWorldProps) => {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles,
    },
  });
  return (
    <div
      style={{
        position: 'relative',
        width: '1000px',
        height: '500px',
        margin: '20px auto',
      }}
    >
      <Map />
      <Player />
      <HealthBar percentage={props.percentage} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
