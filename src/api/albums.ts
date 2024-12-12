import client from './apiClient';

import artistRequests from '../requests/artist';
import albumRequests from '../requests/album';

import { Album, AlbumInfo } from '../types';

export type GetTopAlbumsResponse = {
  topalbums: {
    album: Array<Album>;
  };
};

export type GetAlbumInfoResponse = {
  album: AlbumInfo;
};

export default {
  getTopAlbums(artist: string) {
    return client.get<GetTopAlbumsResponse>('/', {
      params: { method: artistRequests.GET_TOP_ALBUMS, artist },
    });
  },
  getAlbumInfo(artist: string, album: string) {
    return client.get<GetAlbumInfoResponse>('/', {
      params: { method: albumRequests.GET_INFO, artist, album },
    });
  },
};
