import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import monsterReducer from './monsterReducer';
import mapReducer from './mapReducer';
import statsReducer from './statsReducer';
import inventoryReducer from './inventoryReducer';

// Combine all reducers
const rootReducers = combineReducers({
  player: playerReducer,
  monster: monsterReducer,
  stats: statsReducer,
  inventory: inventoryReducer,
  map: mapReducer,
});

export default rootReducers;
