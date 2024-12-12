import client from './apiClient';

import artistRequest from '../requests/artist';

import { Artist } from '../types';

export type SearchArtistResponse = {
  results: {
    artistmatches: {
      artist: Array<Artist>;
    };
  };
};

export default {
  searchArtist(artist: string) {
    return client.get<SearchArtistResponse>('/', {
      params: { method: artistRequest.SEARCH, artist },
    });
  },
};
