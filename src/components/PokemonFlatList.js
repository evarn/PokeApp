import React from 'react';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';
import PokeProfile from './PokeProfile';

const PokemonFlatList = ({pokemons, loadMore, isNext}) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <PokeProfile item={item} />}
        contentContainerStyle={styles.container}
        keyExtractor={item => {
          return item.id;
        }}
        numColumns={2}
        onEndReached={isNext ? loadMore : null}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          isNext ? <ActivityIndicator size="large" color="black" /> : null
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  image: {
    width: 120,
    height: 120,
  },
});
export default PokemonFlatList;
