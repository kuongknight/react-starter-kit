import { takeEvery } from 'redux-saga/effects';
import { FETCH_CONTENT_START } from '../constants';


/**
 * Retrieves the vaccinations from the presistent storage.
 */
export function* fetchContents(helpers) {
  console.log('test', helpers);
  yield new Promise((resolve) => resolve());
}

/*
 * Waits for an FETCH_VACCINATIONS to trigger fetchVaccinations.
 *
 * Whenever fetchVaccinations is in progress it doesn't trigger a new call of it.
 */
export function* watchFetchContents(helpers) {
  console.log('aaaaaaaaaaaaaaa', helpers);
  yield takeEvery(FETCH_CONTENT_START, fetchContents);
}
