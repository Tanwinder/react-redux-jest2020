import { takeLatest,take, call, put } from 'redux-saga/effects'
import {Api} from '../utils/api'


function* callEventsSaga(action) {
   try {
    yield put({type: 'EVENTS_LOADER'});
    let { data } = yield call(Api.get, "/events");
    console.log('eventssssss', data)
    yield put({type: 'GET_EVENTS', payload: data});
   } catch (error) {
       console.log(error)
   }
}

export default function* eventsSaga() {
    console.log('events saga')
    yield takeLatest('GET_EVENTS_ITEMS', callEventsSaga)
}