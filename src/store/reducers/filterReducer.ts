import { SAVE_FILTERS_PARAMS } from '../constants/actionTypes';

const initialState = JSON.parse(localStorage.getItem('filters') || '[]') || [];

const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_FILTERS_PARAMS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default filterReducer;
