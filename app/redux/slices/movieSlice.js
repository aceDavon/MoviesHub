import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiKey, basePath, imagePath} from '../../../appKeys';

const initialState = {
  popular: [],
  searched: [],
  selected: {},
  status: 'idle',
};

export const popularMovies = createAsyncThunk('fetch/popular', async () => {
  try {
    const data = await fetch(`${basePath}movie/popular?api_key=${apiKey}`);
    const res = await data.json();
    return res.results;
  } catch (error) {
    return error.message;
  }
});

export const SearchMovies = createAsyncThunk(
  'search/movies',
  async (title) => {
    try {
      const data = await fetch(
        `${basePath}search/movie?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`,
      );
      const res = await data.json();
      return res.results;
    } catch (error) {
      return error.message;
    }
  },
);

export const GetMovie = createAsyncThunk('fetch/movie', async id => {
  try {
    const data = await fetch(
      `${basePath}movie/${id}?api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
    );
    const res = await data.json();
    return res;
  } catch (error) {
    return error.message;
  }
});

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: Builder => {
    Builder.addCase(popularMovies.pending, state => {
      state.status = 'waiting';
    })
      .addCase(popularMovies.fulfilled, (state, {payload}) => {
        state.status = 'idle';
        const fullData = payload.map(x => {
          return {
            ...x,
            poster_path: `${imagePath}${x.poster_path}`,
          };
        });
        state.movies = state.popular.concat(fullData);
      })
      .addCase(SearchMovies.pending, state => {
        state.status = 'searching';
      })
      .addCase(SearchMovies.fulfilled, (state, {payload}) => {
        const fullData = payload.map(x => {
          return {
            ...x,
            poster_path: `${imagePath}${x.poster_path}`,
          };
        });
        state.searched = fullData;
        state.status = 'idle';
      })
      .addCase(GetMovie.pending, (state) => {
        state.status = 'waiting';
      })
      .addCase(GetMovie.fulfilled, (state, { payload }) => {
        state.selected = {
          ...payload,
          backdrop_path: `${imagePath}${payload.backdrop_path}`,
        };
      })
  },
});

export const selectAllMovies = state => state.movies;

export default MovieSlice.reducer;
