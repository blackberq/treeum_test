import { produce } from 'immer';

import { GET_TOP_ALBUMS_SUCCESS, GET_ALBUM_INFO_SUCCESS } from './../constants/albums';

import { GetTopAlbumsSuccessPayload, GetAlbumInfoSuccessPayload } from '../actions/albums';

import { Album, AlbumInfo } from '../../types';

type State = {
  topAlbums: Array<Album>;
  albumInfo: AlbumInfo | undefined;
};

const initialState: State = {
  topAlbums: [],
  albumInfo: undefined,
};

export default produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_ALBUMS_SUCCESS: {
      const data = payload as GetTopAlbumsSuccessPayload;

      if (data?.topalbums) {
        draft.topAlbums = data.topalbums?.album;
      } else {
        draft.topAlbums = [];
      }

      break;
    }
    case GET_ALBUM_INFO_SUCCESS: {
      const data = payload as GetAlbumInfoSuccessPayload;

      console.log('red ==> ', data);

      draft.albumInfo = data.album;

      break;
    }
    default:
      break;
  }
}, initialState);
