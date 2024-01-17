import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem('favorites', JSON.stringify(store.getState().favoriteReducer));
  localStorage.setItem('filters', JSON.stringify(store.getState().filterReducer));
});

export default store;
