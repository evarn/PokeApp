import {useSelector, useDispatch} from 'react-redux';
import {gameSlice} from '../slices/gameSlice';
import {getPokemonInfo, getPokemonsUrl} from '../../api/getPokemon';

export const loadGameData = () => {
  return async dispatch => {
    try {
      dispatch(gameSlice.actions.fetching());

      // const data = await getPokemons(
      //   'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100',
      // );
      // dispatch(gameSlice.actions.fetchSuccess(data.results));

      const data = await getPokemonInfo(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100',
      );

      dispatch(gameSlice.actions.fetchSuccess(data[0]));
    } catch (error) {
      dispatch(gameSlice.actions.fetchError());
    }
  };
};

export const getImage = async url => {
  const data = await getPokemonsUrl(url);
  return data;
};
