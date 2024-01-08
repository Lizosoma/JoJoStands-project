import { SET_STAND_TO_FAVORITE, REMOVE_STAND_FROM_FAVORITE } from '../constants/actionTypes';

export const setStandToFavorite = (stand) => ({
  type: SET_STAND_TO_FAVORITE,
  payload: stand,
});

export const removeStandFromFavorite = (standId) => ({
  type: REMOVE_STAND_FROM_FAVORITE,
  payload: standId,
});
