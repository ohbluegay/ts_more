import { all, fork } from 'redux-saga/effects'
import homeSaga from 'src/sagas/home'
import awaySaga from 'src/sagas/away'

const sagas = {
    home: fork(homeSaga),
    away: fork(awaySaga)
}

export default function* rootSaga() {
    yield all(sagas)
}