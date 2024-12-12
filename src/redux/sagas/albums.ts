import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  getTopAlbumsRequest,
  getTopAlbumsSuccess,
  getTopAlbumsError,
  getAlbumInfoRequest,
  getAlbumInfoSuccess,
  getAlbumInfoError,
} from '../actions/albums';

import api from '../../api';

function* getTopAlbumsSaga({
  payload: { artist, onSuccess, onError, onFinally },
}: ReturnType<typeof getTopAlbumsRequest>) {
  try {
    const { data }: Awaited<ReturnType<typeof api.albums.getTopAlbums>> = yield call(
      api.albums.getTopAlbums,
      artist,
    );

    yield put(getTopAlbumsSuccess(data));

    onSuccess && onSuccess(data.topalbums?.album);
  } catch (error: any) {
    console.log('Get top album error', error);
    yield put(getTopAlbumsError(error));

    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
}

function* getAlbumInfoSaga({
  payload: { artist, album, onSuccess, onError, onFinally },
}: ReturnType<typeof getAlbumInfoRequest>) {
  try {
    const { data }: Awaited<ReturnType<typeof api.albums.getAlbumInfo>> = yield call(
      api.albums.getAlbumInfo,
      artist,
      album,
    );

    yield put(getAlbumInfoSuccess(data));

    onSuccess && onSuccess(data.album);
  } catch (error: any) {
    console.log('Get album info error', error);
    yield put(getAlbumInfoError(error));

    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
}

export default function* watchAlbums() {
  yield all([
    takeLatest(getTopAlbumsRequest, getTopAlbumsSaga),
    takeLatest(getAlbumInfoRequest, getAlbumInfoSaga),
  ]);
}
