import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../src/client/reducers/index';

const store = createStore(rootReducers, composeWithDevTools());

export default store;

export type AppDispatch = typeof store.dispatch;
