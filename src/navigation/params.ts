import { ALBUM, ARTIST, HOME } from '.';

export type StackNavigatorParams = {
  [HOME]: undefined;
  [ARTIST]: {
    artist: string;
    album: string;
  };
  [ALBUM]: {
    artist: string;
  };
};
