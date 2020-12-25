import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import Footer from './client/components/Footer';
import World from './client/containers/World';
import Viewport from './client/components/hud/ViewPort';
import MainMenu from './client/containers/MainMenu';

import '../src/stylesheets/index.scss';

const history = createBrowserHistory();

const App = ({ appState }: any) => {
  let showFooter = true;
  return (
    <>
      <div className='app-container'>
        <Viewport>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={MainMenu}></Route>
              <Route path='/game' component={World}></Route>
            </Switch>
          </Router>
        </Viewport>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

const mapStateToProps = ({ appState }: any) => ({ appState });

export default connect(mapStateToProps)(App);
