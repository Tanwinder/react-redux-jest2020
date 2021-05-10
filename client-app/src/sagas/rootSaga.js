import { all, fork } from 'redux-saga/effects';
import eventsSaga from './eventSaga'

export default function* rootSaga() {
    yield all([
        fork(eventsSaga),
    ])
}