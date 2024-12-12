import { Artist, ArtistInfo } from './artist';

export type Tag = {
  url: string;
  name: string;
};

export type Streamable = {
  '#text': string;
  fulltrack: string;
};

export type Track = {
  artist: ArtistInfo & { mbid: string };
  duration: number;
  name: string;
  streamable: Streamable;
  url: string;
};

export type Album = Pick<Artist, 'image' | 'name'> & {
  playcount: number;
  url: string;
  artist: ArtistInfo;
};

export type WikiInfo = {
  content: string;
  published: string;
  summary: string;
};

export type AlbumInfo = Pick<Album, 'image' | 'name'> & {
  artist: string;
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  tags: {
    tag: Array<Tag>;
  };
  tracks: {
    track: Array<Track>;
  };
  url: string;
  wiki: WikiInfo;
};
