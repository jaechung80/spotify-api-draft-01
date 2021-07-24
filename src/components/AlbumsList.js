import React, { useEffect } from 'react';

const AlbumsList = (props) => {
  useEffect(() => {
    console.log('in AlbumsList props.albums', props.albums);
  });

  return (
    <div>
      {props.albums?.items?.map((album) => {
        return (
          <ul key={album.id}>
            <li>Artist: {album.artists[0].name}</li>
            <li>Album: {album.name}</li>
            <li>
              <img src={album.images[0].url} />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AlbumsList;
