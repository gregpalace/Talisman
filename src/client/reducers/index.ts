import { combineReducers } from 'redux';
import playerReducer from './player/playerReducer';
import monsterReducer from './monsters/monsterReducer';
import mapReducer from './map/mapReducer';
import statsReducer from './stats/statsReducer';
import inventoryReducer from './inventory/inventoryReducer';
import dialogManagerReducer from './dialogManager/dialogManagerReducer';

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
