import { takeLatest, call, put, all } from 'redux-saga/effects'
import {Api} from '../utils/api';
import {LOG_OUT_USER, LOG_OUT, CALL_AUTH} from '../actions/actionTypes'

function* callLoginSaga({formData, router, from, alreadyLoggedIn}) {
    try {
        if (alreadyLoggedIn) {
            yield put({ type: "AUTH", payload: formData });
        } else {
            const options = {
                method: 'post',
                payload: formData
            }
            const {data} = yield call(Api, '/auth/signin', options);
            localStorage.setItem('profile', JSON.stringify(data));
            yield put({ type: "AUTH", payload: data });
            router.push(from?.pathname);
        }
    } catch (error) {
        console.log('error', error)
    }
}

function* logOut() {
    yield put({type: LOG_OUT_USER});
}

export default function* loginSaga() {
    yield all([
        takeLatest(CALL_AUTH, callLoginSaga),
        takeLatest(LOG_OUT, logOut)
    ])
}
