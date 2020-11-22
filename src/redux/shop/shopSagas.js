import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';

import { FETCH_COLLECTIONS_START } from './shopTypes';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections);
}
