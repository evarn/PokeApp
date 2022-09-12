import React, {useEffect} from 'react';
import PokemonFlatList from '../components/PokemonFlatList';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchPokemons} from '../store/actions/pokemonsActions';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const {pokeData, nextUrl} = useSelector(state => state.poke);

  useEffect(() => {
    dispatch(fetchPokemons(nextUrl));
  }, []);

  const loadMore = () => {
    dispatch(fetchPokemons(nextUrl));
  };

  return (
    <View style={styles.container}>
      <>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Pokedex</Text>
        </View>

        <View>
          <View style={{marginBottom: 65}}>
            <PokemonFlatList
              pokemons={pokeData}
              loadMore={loadMore}
              isNext={nextUrl}
            />
          </View>
        </View>
      </>
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
