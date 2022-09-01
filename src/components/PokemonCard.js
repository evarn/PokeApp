import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PokemonCard = pokemon => {
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text style={styles.text}>{pokemon.name}</Text>
      <Text style={styles.text}>{pokemon.id}</Text>
      <Image source={{uri: pokemon.image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  text: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default PokemonCard;
