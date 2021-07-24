import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
const DisplayResults = (props) => {
  useEffect(() => {
    console.log('in DisplayResults props', props);
  });

  return (
    <div>
      test
      {/* <AlbumsList /> */}
      <ArtistsList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
  };
};

export default connect(mapStateToProps)(DisplayResults);
