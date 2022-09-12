import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import HeaderDex from './HeaderDex';
import StatsPoke from './StatsPoke';

const typeColor = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const PokeProfile = ({item}) => {
  const getColorType = item => {
    const backGroundColorByType = {
      backgroundColor: typeColor[item.types[0].type.name],
      ...styles.container,
    };
    return backGroundColorByType;
  };

  return (
    <View style={getColorType(item)} key={item.id}>
      <HeaderDex item={item} />
      <View style={styles.headContainer}>
        <View style={styles.imgContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.id}>#{item.id.toString().padStart(3, '0')}</Text>
        </View>
      </View>

      <View style={styles.line} />

      <StatsPoke item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 3,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  headContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 3,
    maxWidth: 120,
    maxHeight: 120,
  },
  image: {
    width: 120,
    height: 120,
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 3,
  },
  name: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  id: {
    color: 'black',
    fontSize: 14,
  },
  line: {
    height: 3,
    backgroundColor: 'white',
  },
});

export default PokeProfile;
