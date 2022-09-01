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
const PokemonFlatList = ({pokemons, loadMore, isNext}) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'blue',
              margin: 5,
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.id}</Text>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
        )}
        contentContainerStyle={styles.container}
        keyExtractor={item => {
          return item.id;
        }}
        numColumns={2}
        onEndReached={isNext ? loadMore : null}
        onEndReachedThreshold={0.1}
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
