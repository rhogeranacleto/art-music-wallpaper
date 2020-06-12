import { useState, useEffect } from "react";
import { IUserData, IQuery, IAlbum, IAlbumQuery } from "../interface";
import { getAlbums } from "./api";

export const useAlbums = (query: IAlbumQuery) => {

  const [albums, setData] = useState<IAlbum[]>([]);
  const [ready, setReady] = useState(false);

  const getData = async () => {

    const data = await getAlbums(query);

    setData(data);
    setReady(true);
  }

  useEffect(() => { getData(); }, []);

  return { albums, ready };
};