import { takeEvery, put, delay } from 'redux-saga/effects'
import * as actions from 'src/actions/home'

function* initHome() {
    yield delay(3000)
    yield put(actions.resetHome(''))
}

export default function* homeSaga() {
    yield takeEvery(String(actions.initHome), initHome)
}