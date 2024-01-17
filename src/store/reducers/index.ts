import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  favoriteReducer,
  filterReducer,
});
