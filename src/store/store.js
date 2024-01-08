import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState().favoriteReducer));
});

export default store;
