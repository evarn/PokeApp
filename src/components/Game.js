import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import {getPokemonsUrl} from '../api/getPokemon';
import {getImage} from '../store/actions/gameActions';
import LoadingPage from '../screen/LoadingPage';

const Game = () => {
  const {gameData, loading} = useSelector(state => state.game);

  const rndIdPokemon = (min, max, count) => {
    let ids = [];
    for (let i = 0; i < count; i++) {
      let el = min + Math.floor(Math.random() * (max + 1 - min));
      ids.includes(el) ? i-- : ids.push(el);
    }
    return ids;
  };

  const idPoke = rndIdPokemon(0, 100, 4);

  const idWinPoke = rndIdPokemon(0, 3, 1);

  const getNamePoke = id => {
    let arr = [];
    for (let i = 0; i < id.length; i++) {
      arr.push(gameData[id[i]]);
    }
    return arr;
  };

  const namePoke = getNamePoke(idPoke);

  const image = namePoke[idWinPoke].image;

  return (
    <View>
      {loading && (
        <>
          <LoadingPage />
        </>
      )}
      {!loading && (
        <>
          <Image source={{uri: image}} style={styles.image} />
          <View>
            {namePoke.map((element, i) => {
              return (
                <View
                  key={element.id}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 10,
                    elevation: 3,
                    backgroundColor: '#903E4B',
                    margin: 3,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (i === idWinPoke[0]) {
                        return console.warn('WIN');
                      } else {
                        return console.warn('LOSS');
                      }
                    }}
                    style={styles.btnText}>
                    <Text>{element.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {},

  image: {
    width: 200,
    height: 200,
    tintColor: 'black',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 0,
    margin: 4,
    color: 'white',
  },
});

export default Game;
