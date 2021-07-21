import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchSpotify } from '../store/albums';

function SearchForm(props) {
  const [search, setSearch] = useState('');

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log('in handleSearch before anything happens');
    props.searchSpotify(search);
  };

  useEffect(() => console.log('here is search in state', search));

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchSpotify: (search) => dispatch(searchSpotify(search)),
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
