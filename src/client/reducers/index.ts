import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

// Combine all reducers
const reducers = combineReducers({
  player: playerReducer,
});

export default reducers;
