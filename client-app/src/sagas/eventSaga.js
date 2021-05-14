import { all, takeLatest, call, put } from 'redux-saga/effects'
import {Api} from '../utils/api';
import {GET_EVENTS_CALL, EVENTS_LOADER, GET_EVENTS} from '../actions/actionTypes'


function* callEventsSaga() {

   try {

    yield put({type: EVENTS_LOADER});

    let { data } = yield call(Api, "/api/events");

    yield put({type: GET_EVENTS, payload: data});

   } catch (error) {
       console.log(error)
   }
}

export default function* eventsSaga() {
    yield all([
        takeLatest(GET_EVENTS_CALL, callEventsSaga)
    ])
}