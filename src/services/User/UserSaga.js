import { takeLatest, all, put } from 'redux-saga/effects'

import { userActions } from './UserSlice'
import Api from '../../common/api/Api'

function* getCampañas(){
    const camp = yield Api.get('/Campana/all')
    yield put(userActions.setCampañas(camp.payload))
    console.log(camp.payload)
}

function* actionWatcher() {
    yield takeLatest(userActions.getCampañas, getCampañas)
}

export default function* usersSaga() {
  yield all([actionWatcher()])
}