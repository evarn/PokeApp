import {gameSlice} from '../slices/gameSlice';
import {getPokemonsUrl, getPokemons} from '../../api/getPokemon';

export const loadGameData = () => {
  return async dispatch => {
    try {
      dispatch(gameSlice.actions.fetching());
      const data = await getPokemons(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100',
      );
      dispatch(gameSlice.actions.fetchSuccess(data.results));
    } catch (error) {
      dispatch(gameSlice.actions.fetchError());
    }
  };
};

export const getDataGame = data => {
  return async dispatch => {
    try {
      dispatch(gameSlice.actions.fetching());
      const rndIdPokemon = (min, max, count) => {
        let ids = [];
        for (let i = 0; i < count; i++) {
          let el = min + Math.floor(Math.random() * (max + 1 - min));
          ids.includes(el) ? i-- : ids.push(el);
        }
        return ids;
      };
      const idPoke = rndIdPokemon(0, 100, 4);
      const idWinPoke = rndIdPokemon(0, 3, 1);

      const getNamePoke = id => {
        let arr = [];
        for (let i = 0; i < id.length; i++) {
          arr.push(data[id[i] + 1].name);
        }
        return arr;
      };
      const namePoke = getNamePoke(idPoke);
      const dataWinPoke = await getPokemonsUrl(
        `https://pokeapi.co/api/v2/pokemon/${namePoke[idWinPoke]}`,
      );
      const image = dataWinPoke.image;
      dispatch(gameSlice.actions.setImage(image));
      dispatch(gameSlice.actions.setNamePoke(namePoke));
      dispatch(gameSlice.actions.setIdWinPoke(idWinPoke));
      dispatch(gameSlice.actions.loadImage(dataWinPoke));
    } catch (error) {
      dispatch(gameSlice.actions.fetchError());
    }
  };
};
