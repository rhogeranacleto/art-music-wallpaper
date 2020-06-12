import './Template-1.scss';
import React from 'react';
// import { useImages } from '../../services/use-images';
import { useAlbums } from '../../services/use-albums';

export const Template1 = ({ user }: { user: string }) => {

  const { albums, ready } = useAlbums({
    user,
    limit: 4
  });

  const albumsImages = albums.map(album => <img src={album.image[3]["#text"]} key={album.name} />);

  return (
    <div id="template-1" className={ready ? 'ready' : ''}>
      <div className="background-4">
        {albumsImages}
      </div>
      <div className="main-4">
        {albumsImages}
      </div>
    </div>
  );
}