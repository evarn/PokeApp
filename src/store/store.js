import {configureStore, combineReducers} from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';
import pokeReducer from './slices/pokeSlice';

import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

const rootReducer = combineReducers({
  game: gameReducer,
  poke: pokeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return defaultMiddleware;
  },
});
export default store;
