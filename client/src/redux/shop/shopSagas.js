import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../firebase/firebase.util';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';

import { FETCH_COLLECTIONS_START } from './shopTypes';

export function* fetchCollectionsAsync() {
  try {
    const collectionsMap = yield call(getCategoriesAndDocuments, 'collections');

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
