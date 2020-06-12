interface IImage {
  size: string;
  '#text': string;
}

export interface IRawAlbums {
  mbid: string;
  name: string;
  playcount: string;
  url: string;
  image: IImage[]
}

export interface ITopAlbums {
  topalbums: {
    album: IRawAlbums[]
  }
}

export interface IRawArtists {
  mbid: string;
  name: string;
  playcount: string;
  url: string;
}

export interface ITopArtists {
  topartists: {
    artist: IRawArtists[]
  }
}

export interface IRawTracks {
  mbid: string;
  name: string;
  playcount: string;
  url: string;
}

export interface ITopTracks {
  toptracks: {
    track: IRawTracks[]
  }
}

export interface IData {
  artists: IRawArtists[],
  tracks: IRawTracks[],
  albums: IRawAlbums[];
}