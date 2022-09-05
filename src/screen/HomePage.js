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

  return (
    <View style={styles.container}>
      <View style={{borderColor: 'black', borderBottomWidth: 2, margin: 3}}>
        {/* <Image source={IconPoke} /> */}
        <Text style={styles.text}>Pokedex</Text>
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
  container: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    margin: 8,
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
