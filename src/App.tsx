import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import Footer from './client/components/Footer';
import World from './client/containers/World';
import Viewport from './client/components/hud/ViewPort';
import MainMenu from './client/containers/MainMenu';
import Splash from './client/components/Splash';

import '../src/stylesheets/index.scss';

const history = createBrowserHistory();

const App = ({ appState }: any) => {
  let showFooter = true;

  const [firstVisit, setFirstVisit] = useState(true);
  return (
    <>
      <div className='app-container'>
        {firstVisit ? (
          <Splash setFirstVisit={setFirstVisit} />
        ) : (
          <Viewport>
            <Router history={history}>
              <Switch>
                <Route exact path='/' component={MainMenu}></Route>
                <Route path='/game' component={World}></Route>
              </Switch>
            </Router>
          </Viewport>
        )}
      </div>
      {showFooter && <Footer />}
    </>
  );
};

const mapStateToProps = ({ appState }: any) => ({ appState });

export default connect(mapStateToProps)(App);
