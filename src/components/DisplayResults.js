import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import TracksList from './TracksList';
// import Button from 'react-bootstrap/Button';
import FilterButton from './FilterButton';

export const DisplayResults = (props) => {
  const [filter, setFilter] = useState('albums');

  useEffect(() => {
    console.log('in DisplayResults props', props);
    console.log('in DisplayResults filter', filter);
  });

  return (
    <>
      <FilterButton
        filter={'albums'}
        onClick={() => {
          setFilter('albums');
        }}
      />
      <FilterButton
        filter={'artists'}
        onClick={() => {
          setFilter('artists');
        }}
      />
      <FilterButton
        filter={'tracks'}
        onClick={() => {
          setFilter('tracks');
        }}
      />
      {/* <Button>Load next 20 results</Button> */}
      {filter === 'albums' && <AlbumsList albums={props.albums} />}
      {filter === 'artists' && <ArtistsList artists={props.artists} />}
      {filter === 'tracks' && <TracksList tracks={props.tracks} />}
    </>
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
