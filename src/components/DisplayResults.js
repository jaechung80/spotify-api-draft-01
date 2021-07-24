import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import TracksList from './TracksList';
import Button from 'react-bootstrap/Button';

const DisplayResults = (props) => {
  const [filter, setFilter] = useState('albums');

  useEffect(() => {
    console.log('in DisplayResults props', props);
    console.log('in DisplayResults filter', filter);
  });

  return (
    <div>
      <Button
        onClick={() => {
          setFilter('albums');
        }}
      >
        Albums
      </Button>
      <Button
        onClick={() => {
          setFilter('artists');
        }}
      >
        Artists
      </Button>
      <Button
        onClick={() => {
          setFilter('tracks');
        }}
      >
        Songs
      </Button>

      {filter === 'albums' && <AlbumsList albums={props.albums} />}
      {filter === 'artists' && <ArtistsList artists={props.artists} />}
      {filter === 'tracks' && <TracksList tracks={props.tracks} />}
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
