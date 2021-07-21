import axios from 'axios';
import { setAuthHeader } from '../api/index';

export const searchSpotify = (search) => {
  return async (dispatch) => {
    try {
      console.log('in searchSpotify thunk');
      setAuthHeader();
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          search
        )}&type=album`
      );

      console.log('in searchSpotify, getting data', data);
      const { albums } = data;
      console.log('in searchSpotify, here are the albums', albums);
      dispatch(setAlbums(albums));
    } catch (err) {
      console.log('error', err);
    }
  };
};
