import { RootState } from '../reducers';

export const selectSearchArtist = (state: RootState) => state.artists.searchArtists;
