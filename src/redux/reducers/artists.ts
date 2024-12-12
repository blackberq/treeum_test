import { produce } from 'immer';

import { SEARCH_ARTIST_SUCCESS } from './../constants/artists';

import { SearchArtistSuccessPayload } from '../actions/artists';

import { Artist } from '../../types';

type State = {
  searchArtists: Array<Artist>;
};

const initialState: State = {
  searchArtists: [],
};

export default produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ARTIST_SUCCESS: {
      const data = payload as SearchArtistSuccessPayload;

      if (data?.results) {
        draft.searchArtists = data.results.artistmatches?.artist;
      } else {
        draft.searchArtists = [];
      }

      break;
    }
    default:
      break;
  }
}, initialState);
