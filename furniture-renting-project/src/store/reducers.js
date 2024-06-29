import { combineReducers } from 'redux';
import furnitureReducer from './reducers/furnitureReducer'; 

const rootReducer = combineReducers({
    furnitureReducer: furnitureReducer,
});

export default rootReducer;
