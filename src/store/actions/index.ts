import {
  SET_STAND_TO_FAVORITE,
  REMOVE_STAND_FROM_FAVORITE,
  SAVE_FILTERS_PARAMS,
} from '../constants/actionTypes';

export const setStandToFavorite = (stand: any) => ({
  type: SET_STAND_TO_FAVORITE,
  payload: stand,
});

export const removeStandFromFavorite = (standId: string) => ({
  type: REMOVE_STAND_FROM_FAVORITE,
  payload: standId,
});

export const saveFiltersParams = (params: any, count: number) => ({
  type: SAVE_FILTERS_PARAMS,
  payload: { params, count },
});
