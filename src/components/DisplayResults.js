import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AlbumsList from './AlbumsList';

const DisplayResults = (props) => {
  useEffect(() => {
    console.log('in DisplayResults props.albums', props.albums);
  });

  return (
    <div>
      test
      <AlbumsList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps)(DisplayResults);
