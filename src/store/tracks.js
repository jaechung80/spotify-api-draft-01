export const set_TRACKS = 'set_TRACKS';

export const setTracks = (tracks) => {
  return {
    type: set_TRACKS,
    tracks,
  };
};

const tracksReducer = (state = {}, action) => {
  switch (action.type) {
    case set_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
