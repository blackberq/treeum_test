import { createAction } from '@reduxjs/toolkit';

import {
  GET_TOP_ALBUMS_REQUEST,
  GET_TOP_ALBUMS_SUCCESS,
  GET_TOP_ALBUMS_ERROR,
  GET_ALBUM_INFO_REQUEST,
  GET_ALBUM_INFO_SUCCESS,
  GET_ALBUM_INFO_ERROR,
} from '../constants/albums';

import { Album, AlbumInfo } from '../../types';
import { GetAlbumInfoResponse, GetTopAlbumsResponse } from '../../api/albums';

export type GetTopAlbumsRequestPayload = {
  artist: string;
  onSuccess?: (albums: Array<Album>) => void;
  onError?: (error: any) => void;
  onFinally?: () => void;
};

export type GetTopAlbumsSuccessPayload = GetTopAlbumsResponse;

export const getTopAlbumsRequest = createAction<GetTopAlbumsRequestPayload>(GET_TOP_ALBUMS_REQUEST);
export const getTopAlbumsSuccess = createAction<GetTopAlbumsSuccessPayload>(GET_TOP_ALBUMS_SUCCESS);
export const getTopAlbumsError = createAction<Error>(GET_TOP_ALBUMS_ERROR);

export type GetAlbumInfoRequestPayload = {
  artist: string;
  album: string;
  onSuccess?: (album: AlbumInfo) => void;
  onError?: (error: any) => void;
  onFinally?: () => void;
};

export type GetAlbumInfoSuccessPayload = GetAlbumInfoResponse;

export const getAlbumInfoRequest = createAction<GetAlbumInfoRequestPayload>(GET_ALBUM_INFO_REQUEST);
export const getAlbumInfoSuccess = createAction<GetAlbumInfoSuccessPayload>(GET_ALBUM_INFO_SUCCESS);
export const getAlbumInfoError = createAction<Error>(GET_ALBUM_INFO_ERROR);
