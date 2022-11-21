import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

export const Store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
