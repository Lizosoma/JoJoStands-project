import { SET_STAND_TO_FAVORITE, REMOVE_STAND_FROM_FAVORITE } from '../constants/actionTypes';
import { omit } from 'lodash';

const initialState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : [];

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STAND_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_STAND_FROM_FAVORITE:
      return omit(state, [action.payload]);
    default:
      return state;
  }
};

export default favoriteReducer;
