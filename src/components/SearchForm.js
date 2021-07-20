import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setAuthHeader } from '../api/index';

function SearchForm() {
  const [search, setSearch] = useState('');

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearch = async (evt) => {
    evt.preventDefault();
    console.log('in handleSearch before anything happens');

    try {
      setAuthHeader();
      const result = await axios.get(
        `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          search
        )}&type=artist`
      );
      console.log('in handleSearch, result', result);
    } catch (err) {
      console.log(err);
    }
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

export default SearchForm;
