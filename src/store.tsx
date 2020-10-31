import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import playerReducer from './client/reducers/playerReducer';

const store = createStore(playerReducer, composeWithDevTools());

export default store;

export type AppDispatch = typeof store.dispatch;
