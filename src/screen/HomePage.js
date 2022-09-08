import React, {useEffect, useState} from 'react';
import PokemonFlatList from '../components/PokemonFlatList';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {getPokemonInfo} from '../api/getPokemon';
import {useDispatch} from 'react-redux';
import {fetchPokemons, loadMore} from '../store/actions/pokemonsActions';
import {useSelector} from 'react-redux';
import {favoriteSlice} from '../store/slices/favoriteSlice';
import LoadingPage from './LoadingPage';
const HomePage = () => {
  // const [pokeDate, setPokeDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [nextUrl, setNextUrl] = useState(undefined);

  // const fetchData = async () => {
  //   try {
  //     const [results, next] = await getPokemonInfo(nextUrl);
  //     setPokeDate(prev => [...prev, ...results]);
  //     setNextUrl(next);
  //   } catch (e) {
  //     throw e;
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const {loading, pokeData, nextUrl} = useSelector(state => state.poke);

  return (
    <View style={styles.container}>
      {loading && (
        <>
          <LoadingPage />
        </>
      )}
      {!loading && (
        <>
          <View style={{borderColor: 'black', borderBottomWidth: 2, margin: 3}}>
            {/* <Image source={IconPoke} /> */}
            <Text style={styles.text}>Pokedex</Text>
          </View>

          <View>
            <PokemonFlatList
              pokemons={pokeData}
              // loadMore={loadMore()}
              // isNext={nextUrl}
            />
          </View>
        </>
      )}
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
    margin: 4,
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
