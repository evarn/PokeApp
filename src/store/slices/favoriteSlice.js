import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorites(state, action) {
      const poke = action.payload;

      state.favorites.push(poke);
      return state;
    },
    deleteFavorites(state, action) {
      delete state.favorites[action.payload];
    },
  },
});

export const {addFavorites, deleteFavorites} = favoriteSlice.actions;

export default favoriteSlice.reducer;
