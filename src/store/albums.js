export const SET_ALBUMS = 'SET_ALBUMS';

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
});

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default albumsReducer;
