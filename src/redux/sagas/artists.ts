import { all, takeLatest, call, put } from 'redux-saga/effects';

import { searchArtistRequest, searchArtistSuccess, searchArtistError } from '../actions/artists';

import api from '../../api';

function* searchArtistSaga({
  payload: { artist, onSuccess, onError, onFinally },
}: ReturnType<typeof searchArtistRequest>) {
  try {
    const { data }: Awaited<ReturnType<typeof api.artists.searchArtist>> = yield call(
      api.artists.searchArtist,
      artist,
    );

    yield put(searchArtistSuccess(data));

    onSuccess && onSuccess(data.results?.artistmatches?.artist);
  } catch (error: any) {
    console.log('Search artists error', error);
    yield put(searchArtistError(error));

    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
}

export default function* watchArtists() {
  yield all([takeLatest(searchArtistRequest, searchArtistSaga)]);
}
