import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inGame: false,
  counter: 0,
  gameData: [],
  loading: false,
  error: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      state.inGame = true;
      return state;
    },
    setWinCounter(state) {
      state.counter += 1;
      return state;
    },
    fetching(state) {
      state.loading = true;
      return state;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.gameData = action.payload;
      return state;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const {startGame, setWinCounter, fetching, fetchSuccess, fetchError} =
  gameSlice.actions;

export default gameSlice.reducer;
