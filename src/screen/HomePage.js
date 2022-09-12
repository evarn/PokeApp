import React, {useEffect, useState} from 'react';
import PokemonFlatList from '../components/PokemonFlatList';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchPokemons, loadMore} from '../store/actions/pokemonsActions';
import {useSelector} from 'react-redux';
import LoadingPage from './LoadingPage';
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const {loading, pokeData, nextUrl} = useSelector(state => state.poke);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Pokedex</Text>
          </View>

          <View>
            <PokemonFlatList
              pokemons={pokeData}
              // loadMore={dispatch(loadMore(nextUrl))}
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
  textContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    margin: 3,
  },
  pokeProfile: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomePage;
