import { takeLatest, call, put } from 'redux-saga/effects'


function* callLoginSaga(action) {

}

export default function* loginSaga() {
    yield takeLatest('GET_EVENTS')
}
