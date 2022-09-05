import {configureStore} from '@reduxjs/toolkit';
import compareReducer from '../features/compare/compareSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    compare: compareReducer,
    favorite: favoriteReducer,
  },
});
