export type Color = {
  main_white: string;
  main_black: string;
  gray: string;
};

export type ImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

export type CoverImage = {
  size: ImageSize;
  '#text': string;
};
