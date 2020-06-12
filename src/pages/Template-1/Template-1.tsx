import React from 'react';
import { useImages } from '../../services/use-images';
import './Template-1.scss';

export const Template1 = ({ user }: { user: string }) => {

  const { images, ready } = useImages({
    user,
    album_limit: 5,
    artist_limit: 0,
    track_limit: 0
  });

  const albumsImages = images.albums
    .filter(album => album.image)
    .filter((_, i) => i < 4)
    .map(album => <img src={album.image} key={album.name} />);

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