import { CoverImage } from './common';

export type Artist = {
  image: Array<CoverImage>;
  listeners: string;
  mbid: string;
  name: string;
  streamable: string;
  url: string;
};

export type ArtistInfo = Pick<Artist, 'name' | 'url'>;
