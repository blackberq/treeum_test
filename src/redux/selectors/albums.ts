import { RootState } from '../reducers';

export const selectTopAlbums = (state: RootState) => state.albums.topAlbums;
export const selectAlbumInfo = (state: RootState) => state.albums.albumInfo;
