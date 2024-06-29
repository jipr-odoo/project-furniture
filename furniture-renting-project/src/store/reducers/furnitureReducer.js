import { FETCH_FURNITURE_DATA_FAILURE, FETCH_FURNITURE_DATA_START, FETCH_FURNITURE_DATA_SUCCESS } from '../actionType';

const initialState = {
  furnitureData : {
    loading: false,
    data: {},
    error: false
  }
};

const furnitureReducer = (state = initialState, action) => {
  switch (action.type) {
    case  FETCH_FURNITURE_DATA_START  :
      return {
        ...state,
        furnitureData : {
            ...state.furnitureData,
            data: {},
            loading: true,
            error: false
        }
      };

      case  FETCH_FURNITURE_DATA_SUCCESS  :
        return {
          ...state,
          furnitureData : {
              ...state.furnitureData,
              data: action.payload,
              loading: false,
              error: false
          }
        };

        case  FETCH_FURNITURE_DATA_FAILURE  :
            return {
              ...state,
              furnitureData : {
                  ...state.furnitureData,
                  data: {},
                  loading: false,
                  error: action.error
              }
            };
    default:
      return state;
  }
};

export default furnitureReducer;
