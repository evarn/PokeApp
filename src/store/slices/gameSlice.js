import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inGame: false,
  counter: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state, actions) {
      state.inGame = actions.payload;
    },
    setWinCounter(state) {
      state.counter += 1;
    },
  },
});

export const {startGame, setWinCounter} = gameSlice.actions;

export default gameSlice.reducer;
