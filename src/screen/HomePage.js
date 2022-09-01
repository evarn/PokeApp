import React, {useEffect, useState} from 'react';
import PokeProfile from '../components/PokeProfile.js';
import PokemonFlatList from '../components/PokemonFlatList';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import IconPoke from '../../assets/pokedex.png';
import {getPokemonInfo} from '../api/getPokemon';
const HomePage = () => {
  const [pokeDate, setPokeDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(undefined);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [results, next] = await getPokemonInfo(nextUrl);
      setPokeDate(prev => [...prev, ...results]);
      setNextUrl(next);
      console.warn('pokeDate', pokeDate);
    } catch (e) {
      throw e;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // let URL = 'https://pokeapi.co/api/v2/pokemon/';
  // let count = 1;
  // const getPokemonId = async id => {
  //   setIsLoading(true);
  //   const url = `${URL}${id}`;
  //   const res = await axios.get(url);

  //   setPokeDate(state => {
  //     state = [...state, res.data];
  //     state.sort((a, b) => a.id - b.id);

  //     return state;
  //   });
  //   setIsLoading(false);
  // };

  // const fetchPokemons = () => {
  //   for (count; count <= 20; count++) {
  //     getPokemonId(count);
  //   }
  // };

  // useEffect(() => {
  //   fetchPokemons();
  // }, []);

  return (
    <View style={styles.viewText}>
      <View>
        <Image source={IconPoke} />
        {/* <PokeProfile data={pokeDate} loading={isLoading} /> */}
      </View>
      <View>
        <PokemonFlatList
          pokemons={pokeDate}
          loadMore={fetchData}
          isNext={nextUrl}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewText: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
  },


  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    color: 'black',
  },
  pokeProfile: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomePage;
