import {  FETCH_FURNITURE_DATA_FAILURE, FETCH_FURNITURE_DATA_START, FETCH_FURNITURE_DATA_SUCCESS } from '../actionType';

export const fetchFurnitureDataStart = () => ({
  type: FETCH_FURNITURE_DATA_START,
});

export const fetchFurnitureDataSuccess = (data) => ({
    type: FETCH_FURNITURE_DATA_SUCCESS,
    payload: data,
  });


export const fetchFurnitureDataFailure = (data) => ({
    type: FETCH_FURNITURE_DATA_FAILURE,
    payload: data,
});
  