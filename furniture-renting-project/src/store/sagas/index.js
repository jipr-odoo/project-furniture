import { all } from 'redux-saga/effects';
import { furnitureSaga } from './furnitureSaga'; // Import your saga

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    furnitureSaga(),
  ]);
}
