import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers.js';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;

