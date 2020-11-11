import React from 'react';
import { connect } from 'react-redux';

import Footer from './client/components/Footer';
import World from './client/containers/World';
import Viewport from './client/components/hud/ViewPort';

import '../src/stylesheets/index.scss';

const App = ({ appState }: any) => {
  let showFooter = true;
  return (
    <>
      <div className='app-container'>
        <Viewport>
          <World />
        </Viewport>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

const mapStateToProps = ({ appState }: any) => ({ appState });

export default connect(mapStateToProps)(App);
