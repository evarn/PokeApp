import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inGame: false,
  counterWin: 0,
  counterLose: 0,
  win: false,
  gameData: [],
  namePoke: [],
  idWinPoke: 0,
  image: '',
  loading: false,
  error: false,
  winPoke: {},
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      state.inGame = !state.inGame;
      return state;
    },
    setWinCounter(state) {
      state.counterWin += 1;
      return state;
    },
    setLoseCounter(state) {
      state.counterLose += 1;
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
    setImage(state, action) {
      state.image = action.payload;
    },
    setNamePoke(state, action) {
      state.namePoke = action.payload;
    },
    setIdWinPoke(state, action) {
      state.idWinPoke = action.payload;
    },
    loadImage(state, action) {
      state.loading = false;
      state.winPoke = action.payload;
    },
    setWin(state, action) {
      state.win = action.payload;
    },
  },
});

export const {
  startGame,
  setWinCounter,
  setLoseCounter,
  fetching,
  fetchSuccess,
  fetchError,
  setImage,
  setNamePoke,
  setIdWinPoke,
  loadImage,
  setWin,
} = gameSlice.actions;

export default gameSlice.reducer;
