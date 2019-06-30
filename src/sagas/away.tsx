import { takeEvery, delay } from 'redux-saga/effects'
import * as actions from 'src/actions/away'

function* initAway(action: any) {
    yield delay(3000)
    console.log('welcome to away', action.payload)
}

export default function* homeSaga() {
    yield takeEvery(String(actions.initAway), initAway)
}