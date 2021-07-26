import React from 'react';
import { SearchForm } from './SearchForm';
import { connect } from 'react-redux';
import searchSpotify from '../store/common';

const Home = (props) => {
  const handleSearch = (search) => {
    console.log('in handleSearch before anything happens');
    props.searchSpotify(search);
  };

  return (
    <>
      <div>Home</div>
      <SearchForm handleSearch={handleSearch} />
    </>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    searchSpotify: (search) => dispatch(searchSpotify(search)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
