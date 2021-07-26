import React, { useState, useEffect } from 'react';
import DisplayResults from './DisplayResults';

export const SearchForm = (props) => {
  const [search, setSearch] = useState('');
  const { handleSearch } = props;

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    console.log('here is search in state', search, 'props', props);
  });

  return (
    <>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSearch(search);
        }}
      >
        <label htmlFor='search'>Search for an album, artist, or song:</label>
        <input
          id='search'
          name='search'
          onChange={handleChange}
          type='text'
          value={search}
        />
        <button type='submit'>Search</button>
      </form>
      <DisplayResults />
    </>
  );
};
