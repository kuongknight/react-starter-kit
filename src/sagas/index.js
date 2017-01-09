import { fork } from 'redux-saga/effects';
import { watchFetchContents } from './content';

export default function* root(helpers) {
  console.log(helpers);
  yield [fork(watchFetchContents)];
}
