import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pokeData: [],
  loading: false,
  error: '',
  nextUrl: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
};

export const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
      return state;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.pokeData = action.payload;
      return state;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
      return state;
    },
    fetchNextUrl(state, action) {
      state.loading = false;
      state.nextUrl = action.payload;
      return state;
    },
    setFavorite(state, action) {
      state.pokeData[action.payload].isFavorite === true
        ? (state.pokeData[action.payload].isFavorite = false)
        : (state.pokeData[action.payload].isFavorite = true);
    },
  },
});

export const {fetching, fetchSuccess, fetchError, fetchNextUrl, setFavorite} =
  pokeSlice.actions;

export default pokeSlice.reducer;
