import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import Map from '../components/Map';
import Player from '../components/Player';
import HudItems from '../containers/HudItems';
import { tiles } from '../../data/maps/1/map1';
import store from '../../store';
import { IState } from '../../typings/PlayerTypes';

const mapStateToProps = (state: IState) => ({
  position: state.player.position,
  hp: state.player.hp,
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
  hp: number;
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
      <HudItems />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
