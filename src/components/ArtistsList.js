import React, { useEffect } from 'react';

const ArtistsList = (props) => {
  useEffect(() => {
    console.log('in ArtistsList props.artists', props.artists);
  });

  return (
    <div>
      {props.artists?.items?.map((artist) => {
        return (
          <ul key={artist.id}>
            <li>Artist: {artist.name}</li>
            <li>Genres: {artist.genres[0] || 'not listed'}</li>
            <li>
              <img
                src={
                  artist.images.length > 0
                    ? artist.images[0].url
                    : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'
                }
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ArtistsList;
