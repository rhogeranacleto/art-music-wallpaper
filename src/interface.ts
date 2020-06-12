interface IImage {
  size: string;
  '#text': string;
}

export interface IAlbum {
  name: string;
  playcount: string;
  url: string;
  image: IImage[];
}

interface IArtist {
  name: string;
  playcount: string;
  url: string;
  images: string[];
}

interface ITrack {
  name: string;
  playcount: string;
  url: string;
  image: IImage[];
}

export interface IUserData {
  albums: IAlbum[];
  artists: IArtist[];
  tracks: ITrack[];
}

export interface IQuery {
  artist_limit: number;
  album_limit: number;
  track_limit: number;
  user: string;
}

export interface IAlbumQuery {
  limit: number;
  user: string;
}