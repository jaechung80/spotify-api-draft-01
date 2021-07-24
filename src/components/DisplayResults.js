import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import TracksList from './TracksList';

const DisplayResults = (props) => {
  useEffect(() => {
    console.log('in DisplayResults props', props);
  });

  return (
    <div>
      <AlbumsList albums={props.albums} />
      <ArtistsList artists={props.artists} />
      <TracksList tracks={props.tracks} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(DisplayResults);
