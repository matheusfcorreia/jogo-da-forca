import { all, fork } from 'redux-saga/effects';

import deliveriesSagas from './deliveries.sagas';

export default function* rootSaga() {
  yield all([...deliveriesSagas]);
}
