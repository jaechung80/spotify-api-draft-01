import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const TracksList = (props) => {
  useEffect(() => {
    console.log('in TracksList props.tracks', props.tracks);
  });

  return (
    <div>
      {props.tracks?.items?.map((track) => {
        return (
          <ul key={track.id}>
            <li>Track Title: {track.name}</li>
            <li>Artist: {track.artists[0].name}</li>
            <li>Album: {track.album.name}</li>
            <li>
              <img
                src={
                  track.album.images.length > 0
                    ? track.album.images[0].url
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

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(TracksList);
