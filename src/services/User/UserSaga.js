import { takeLatest, all, put } from 'redux-saga/effects'

import { userActions } from './UserSlice'
import Api from '../../common/api/Api'


function* actionWatcher() {
  yield takeLatest(userActions.Login, Login)
  yield takeLatest(userActions.getMunicipalityByDepartment, getMunicipalityByDepartment)
  yield takeLatest(userActions.createUser, createUser)
  yield takeLatest(userActions.getSeller, getSeller)
}

export default function* usersSaga() {
  yield all([actionWatcher()])
}