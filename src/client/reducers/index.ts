import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import mapReducer from './mapReducer';

// Combine all reducers
const rootReducers = combineReducers({
  player: playerReducer,
  map: mapReducer,
});

export default rootReducers;
