import React from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import PokemonCard from './PokemonCard';
import PokeProfile from './PokeProfile';
import {useDispatch} from 'react-redux';

const PokemonFlatList = ({pokemons, loadMore, isNext}) => {
  const dispatch = useDispatch;
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
        onEndReached={isNext ? loadMore(isNext) : null}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={
        //   isNext ? (
        //     <ActivityIndicator
        //       //style={styles.spinner}
        //       size="large"
        //       color="#AEAEAE"
        //     />
        //   ) : null
        // }
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
