import { all, call } from 'redux-saga/effects';

import watchArtists from './artists';
import watchAlbums from './albums';

export default function* rootSaga() {
  yield all([call(watchArtists), call(watchAlbums)]);
}
