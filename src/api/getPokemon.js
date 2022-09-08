import axios from 'axios';

export const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (nextUrl = '', limit = 10, offset = 0) => {
  try {
    const url =
      nextUrl || `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
    const {data} = await axios.get(url);
    const results = data.results;
    const next = data.next;
    return {results, next};
  } catch (e) {
    throw e;
  }
};

export const getPokemonsUrl = async url => {
  try {
    const {data} = await axios.get(url);
    return formatedPokeData(data);
  } catch (e) {
    throw e;
  }
};

export const getPokemonInfo = async (nextUrl = '') => {
  const {results, next} = await getPokemons(nextUrl);
  const details = await Promise.all(
    results.map(async ({url}) => {
      let pokeDetails = await getPokemonsUrl(url);
      const isFavorite = {isFavorite: undefined};
      pokeDetails = {...pokeDetails, ...isFavorite};
      return pokeDetails;
    }),
  );
  return [details, next];
};

const formatedPokeData = pokeDetails => {
  const id = pokeDetails.id;
  const name = pokeDetails.name;
  const stats = pokeDetails.stats;
  const abilities = pokeDetails.abilities;
  const types = pokeDetails.types;
  const image = pokeDetails.sprites.other['official-artwork'].front_default;
  return {
    id,
    name,
    stats,
    abilities,
    types,
    image,
  };
};
