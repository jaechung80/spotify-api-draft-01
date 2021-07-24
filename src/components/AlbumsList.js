import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps)(AlbumsList);
