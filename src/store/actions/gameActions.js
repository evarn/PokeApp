import {gameSlice} from '../slices/gameSlice';
import {getPokemonsUrl, getPokemons} from '../../api/getPokemon';

// Загрузка 100 покемонов для игры
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

// Выбор покемонов из 100 загруженных
export const getDataGame = data => {
  return async dispatch => {
    try {
      dispatch(gameSlice.actions.fetching());
      // Функция нахождения случайного числа
      const rndIdPokemon = (min, max, count) => {
        let ids = [];
        for (let i = 0; i < count; i++) {
          let el = min + Math.floor(Math.random() * (max + 1 - min));
          ids.includes(el) ? i-- : ids.push(el);
        }
        return ids;
      };
      // Получение id 4 случайных покемонов
      const idPoke = rndIdPokemon(0, 100, 4);
      // Получение id загаданного покемона из 4
      const idWinPoke = rndIdPokemon(0, 3, 1);

      // Функция получения имени
      const getNamePoke = id => {
        let arr = [];
        for (let i = 0; i < id.length; i++) {
          arr.push(data[id[i] + 1].name);
        }
        return arr;
      };
      // Получение имён 4 случайных покемонов
      const namePoke = getNamePoke(idPoke);
      // Запрос на получение загаднного покемона
      const dataWinPoke = await getPokemonsUrl(
        `https://pokeapi.co/api/v2/pokemon/${namePoke[idWinPoke]}`,
      );
      // Получение изображения загаднного покемона
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
