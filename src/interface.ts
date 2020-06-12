interface IAlbum {
  name: string;
  playcount: string;
  url: string;
  image?: string;
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
  image?: string;
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