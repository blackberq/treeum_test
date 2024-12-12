import { createAction } from '@reduxjs/toolkit';

import {
  FETCH_MY_ARTIST_REQUEST,
  FETCH_MY_ARTIST_SUCCESS,
  FETCH_MY_ARTIST_ERROR,
  SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_ERROR,
} from '../constants/artists';

import { Artist } from '../../types/artist';
import { SearchArtistResponse } from '../../api/artists';

export type FetchMyArtistRequestPayload = {
  artist: string;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onFinally?: () => void;
};

export type FetchMyArtistSuccessPayload = {
  //
};

export const fetchMyArtistRequest =
  createAction<FetchMyArtistRequestPayload>(FETCH_MY_ARTIST_REQUEST);
export const fetchMyArtistSuccess =
  createAction<FetchMyArtistSuccessPayload>(FETCH_MY_ARTIST_SUCCESS);
export const fetchMyArtistError = createAction<Error>(FETCH_MY_ARTIST_ERROR);

export type SearchArtistRequestPayload = {
  artist: string;
  onSuccess?: (artists: Array<Artist>) => void;
  onError?: (error: any) => void;
  onFinally?: () => void;
};

export type SearchArtistSuccessPayload = SearchArtistResponse;

export const searchArtistRequest = createAction<SearchArtistRequestPayload>(SEARCH_ARTIST_REQUEST);
export const searchArtistSuccess = createAction<SearchArtistSuccessPayload>(SEARCH_ARTIST_SUCCESS);
export const searchArtistError = createAction<Error>(SEARCH_ARTIST_ERROR);
