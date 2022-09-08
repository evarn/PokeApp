import {useSelector} from 'react-redux';
import {getPokemons, getPokemonInfo} from '../../api/getPokemon';
import {pokeSlice} from '../slices/pokeSlice';
import axios from 'axios';

export const fetchPokemons = () => {
  return async dispatch => {
    try {
      dispatch(pokeSlice.actions.fetching());

      const data = await getPokemonInfo();

      dispatch(pokeSlice.actions.fetchSuccess(data[0]));
      dispatch(pokeSlice.actions.fetchNextUrl(data[1]));
    } catch (error) {
      dispatch(pokeSlice.actions.fetchError());
    }
  };
};

export const loadMore = nextUrl => {
  return async dispatch => {
    try {
      dispatch(pokeSlice.actions.fetching());

      const data = await getPokemonInfo(nextUrl);

      dispatch(pokeSlice.actions.fetchSuccess(data[0]));
      dispatch(pokeSlice.actions.fetchNextUrl(data[1]));
    } catch (error) {
      dispatch(pokeSlice.actions.fetchError());
    }
  };
};
