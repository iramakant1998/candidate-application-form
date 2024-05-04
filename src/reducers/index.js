// src/reducers/index.js
import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  job: jobReducer,
  filter: filterReducer,
});

export default rootReducer;
