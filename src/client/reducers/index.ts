import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import mapReducer from './mapReducer';
import statsReducer from './statsReducer';

// Combine all reducers
const rootReducers = combineReducers({
  player: playerReducer,
  stats: statsReducer,
  map: mapReducer,
});

export default rootReducers;
