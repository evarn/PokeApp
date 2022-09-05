import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (nextUrl = '') => {
  try {
    const url = nextUrl || `${BASE_URL}/pokemon?limit=20&offset=0`;
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
    return data;
  } catch (e) {
    throw e;
  }
};

export const getPokemonInfo = async (nextUrl = '') => {
  const {results, next} = await getPokemons(nextUrl);

  const details = await Promise.all(
    results.map(async ({url}) => {
      const pokeDetails = await getPokemonsUrl(url);
      return formatedPokeData(pokeDetails);
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
