import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PokeProfile from '../components/PokeProfile';
import {useSelector} from 'react-redux';
import PokemonFlatList from '../components/PokemonFlatList';
const FavoritePage = () => {
  const {pokeData} = useSelector(state => state.poke);

  const favoritesItem = pokeData.filter(element => {
    return element.isFavorite === true;
  });

  return (
    <View style={styles.container}>
      <View style={{borderColor: 'black', borderBottomWidth: 2, margin: 3}}>
        <Text style={styles.text}> Favorite Page </Text>
      </View>

      <View>
        <PokemonFlatList pokemons={favoritesItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    margin: 4,
    color: 'black',
  },
  container: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
  },
});

export default FavoritePage;
