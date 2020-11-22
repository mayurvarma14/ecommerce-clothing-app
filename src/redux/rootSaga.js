import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsStart } from './shop/shopSagas';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
