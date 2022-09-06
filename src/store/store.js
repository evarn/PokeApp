import {configureStore, combineReducers} from '@reduxjs/toolkit';
import compareReducer from './slices/compareSlice';
import favoriteReducer from './slices/favoriteSlice';
import pokeReducer from './slices/pokeSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  compare: compareReducer,
  favorite: favoriteReducer,
  poke: pokeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return defaultMiddleware;
  },
});
export const persistor = persistStore(store);
export default store;
