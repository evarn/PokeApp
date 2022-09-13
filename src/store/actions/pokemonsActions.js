import {getPokemonInfo} from '../../api/getPokemon';
import {pokeSlice} from '../slices/pokeSlice';

export const fetchPokemons = nextUrl => {
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
