export const SET_ARTISTS = 'SET_ARTISTS';

export const setArtists = (artists) => {
  return {
    type: SET_ARTISTS,
    artists,
  };
};

const artistsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default artistsReducer;
