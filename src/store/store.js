import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from './albums';
import artistsReducer from './artists';
import tracksReducer from './tracks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    tracks: tracksReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
