import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import Map from '../components/Map';
import Player from '../components/Player';
import { tiles } from '../../data/maps/1/map1';
import store from '../../store';

interface IPlayerState {
  readonly hp: number;
  readonly mp: number;
  readonly position: number[];
  readonly inventorySlots: number;
}

const mapStateToProps = (state: IPlayerState) => ({
  position: state.position,
});

const World = (props: any) => {
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
    </div>
  );
};

export default connect(mapStateToProps)(World);
