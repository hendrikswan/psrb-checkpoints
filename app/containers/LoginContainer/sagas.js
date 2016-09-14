// import { take, call, put, select } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

function* handleLogin() {
  yield put(goBack());
}


// Individual exports for testing
export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleLogin);
}

// All sagas to be loaded
export default [
  doLoginSaga,
];
