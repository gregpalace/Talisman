import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import monsterReducer from './monsterReducer';
import mapReducer from './mapReducer';
import statsReducer from './statsReducer';
import inventoryReducer from './inventoryReducer';
import dialogManagerReducer from './dialogManagerReducer';

// Combine all reducers
const rootReducers = combineReducers({
  player: playerReducer,
  monster: monsterReducer,
  inventory: inventoryReducer,
  dialog: dialogManagerReducer,
  stats: statsReducer,
  map: mapReducer,
});

export default rootReducers;
