import { takeLatest, put , call} from 'redux-saga/effects';
import { FETCH_FURNITURE_DATA_START } from '../actionType';
import { fetchFurnitureDataSuccess } from '../actions/furnitureAction';
import axios from 'axios'
// async function getApiFurniture() {
// 
// }

function* handleAction(action) {
  try { 

    const response = yield call(axios.get, 'http://localhost:3030/getAllProduct');
    if (response.status === 200) {

        yield put(fetchFurnitureDataSuccess(response.data)); 
    }
  } catch (error) {
    console.error('Error in Saga:', error);
  }
}
export function* furnitureSaga() {
  yield takeLatest(FETCH_FURNITURE_DATA_START, handleAction);
}
