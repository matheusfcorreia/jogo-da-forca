import { takeLatest, call, put, select } from 'redux-saga/effects';

import { getDeliveries, getCarriers } from '../../services/api';
import { Creators as deliveriesActions } from '../ducks/deliveries';
import { Creators as userInterfaceActions } from '../ducks/userInterface';

import { paramMaker } from '../../util/regexp';

function* getDeliveriesWatcher() {
  function* worker() {
    try {
      yield put(userInterfaceActions.setLoading(true));
      
      const cnpj = yield select(s => s.user.cnpj);
      const limit = yield select(s => s.deliveries.limit);
      const status = yield select(s => s.deliveries.status);
      const general = yield select(s => s.deliveries.filters.general);
      const dates = yield select(s => s.deliveries.filters.dates);
      const allCarriers = yield select(s => s.session.carriersIds);
      const selectedCarriers = yield select(s => s.deliveries.filters.selectedCarriers);

      if (!status || allCarriers.length < 1) return;

      let query = `status=${status}&limit=${limit}&taker.cnpj=${cnpj}`;
      if (general) query += `&q=${general}`;
      if (dates.length > 0) query += `&${paramMaker('multipleDates', dates)}`;
      if (selectedCarriers.length > 0) {
        query += `&${paramMaker(
          'ref',
          selectedCarriers.map(e => e._id)
        )}`;
      } else {
        query += `&${paramMaker('ref', allCarriers)}`;
      }

      const result = yield call(getDeliveries, query);

      if (result.status === 200) {
        yield put(deliveriesActions.setDeliveries(result.data.docs));
        yield put(deliveriesActions.setHasNextPage(result.data.hasNextPage));
        yield put(deliveriesActions.setTotalDocs(result.data.totalDocs));
      }
    } catch (error) {
      console.log(error);
    } finally {
      yield put(userInterfaceActions.setLoading(false));
    }
  }
  yield takeLatest('GET_DELIVERIES', worker);
}

function* getCarriersWatcher() {
  function* worker(action) {
    try {
      yield put(userInterfaceActions.setLoading(true));

      const { inputValue, limit } = action;
      const carriersIds = yield select(s => s.session.carriersIds);
      let query = `limit=${limit}&${paramMaker('_id', carriersIds)}`;
      if (inputValue) query += `&q=${inputValue}`;

      const result = yield call(getCarriers, query);

      if (result.status === 200) {
        yield put(deliveriesActions.setCarriers(result.data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      yield put(userInterfaceActions.setLoading(false));
    }
  }
  yield takeLatest('GET_CARRIERS', worker);
}

const deliveriesSagas = [getDeliveriesWatcher(), getCarriersWatcher()];

export default deliveriesSagas;
