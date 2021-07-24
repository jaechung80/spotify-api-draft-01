import axios from 'axios';
import { setAuthHeader } from '../api/index';
import { setAlbums } from './albums';
import { setArtists } from './artists';
import { setTracks } from './tracks';

const searchSpotify = (search) => {
  return async (dispatch) => {
    try {
      console.log('in searchSpotify thunk');
      setAuthHeader();
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          search
        )}&type=album,artist,track`
      );

      console.log('in searchSpotify, getting data', data);
      const { albums, artists, tracks } = data;
      console.log('in searchSpotify, here are the albums', albums);
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
      dispatch(setTracks(tracks));
    } catch (err) {
      console.log('error', err);
    }
  };
};

const loadMoreResults = (nextLink) => {
  return async (dispatch) => {
    try {
      console.log('in loadMoreResults thunk');
      setAuthHeader();
      const { data } = await axios.get(nextLink);

      console.log('in loadMoreResults, getting data', data);
      const { albums, artists, tracks } = data;
      console.log('in loadMoreResults, here are the albums', albums);

      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
      dispatch(setTracks(tracks));
    } catch (err) {
      console.log('error, err');
    }
  };
};

export default searchSpotify;
