import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  // Se der erro, colocar um return
  yield all([cart])
}
