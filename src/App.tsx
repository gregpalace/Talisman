import React from 'react';
import { connect } from 'react-redux';

import World from './client/containers/World';
import Viewport from './client/components/hud/ViewPort';

import '../src/stylesheets/index.scss';

const App = ({ appState }: any) => {
  return (
    <div>
      <Viewport>
        <World />
      </Viewport>
    </div>
  );
};

const mapStateToProps = ({ appState }: any) => ({ appState });

export default connect(mapStateToProps)(App);
