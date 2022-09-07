import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PokeProfile from '../components/PokeProfile';
import {useSelector} from 'react-redux';
import PokemonFlatList from '../components/PokemonFlatList';
const FavoritePage = () => {
  const {favorites} = useSelector(state => state.favorite);
  const {pokeData} = useSelector(state => state.poke);
  let favoritesItem = [];
  favorites.map((item, i) => {
    favoritesItem[i] = item.item;
  });
  console.warn(favoritesItem);
  console.warn(pokeData);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Favorite Page </Text>
      <View>
        <PokemonFlatList
          pokemons={favoritesItem}
          // loadMore={loadMore()}
          // isNext={nextUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    color: 'black',
  },
  container: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
  },
});

export default FavoritePage;
