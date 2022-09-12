import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import PokemonFlatList from '../components/PokemonFlatList';

const FavoritePage = () => {
  const {pokeData} = useSelector(state => state.poke);

  const favoritesItem = pokeData.filter(element => {
    return element.isFavorite === true;
  });
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> Favorite Page </Text>
      </View>

      <View style={{marginBottom: 65}}>
        <PokemonFlatList pokemons={favoritesItem} />
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
    margin: 4,
    color: 'black',
  },
  textContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    margin: 3,
  },
});

export default FavoritePage;
