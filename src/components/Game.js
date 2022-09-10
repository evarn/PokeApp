import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';

import {getPokemonsUrl} from '../api/getPokemon';
import {getDataGame} from '../store/actions/gameActions';
import LoadingPage from '../screen/LoadingPage';
import {useDispatch, useSelector} from 'react-redux';
import {gameSlice} from '../store/slices/gameSlice';

const Game = () => {
  const {gameData, loading} = useSelector(state => state.game);
  const {inGame, container, namePoke, idWinPoke, image, win} = useSelector(
    state => state.game,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataGame(gameData));
  }, []);

  const getTintColor = () => {
    const color = inGame ? undefined : 'black';

    const tintColor = {
      tintColor: color,
      ...styles.image,
    };
    return tintColor;
  };

  return (
    <View>
      {loading && (
        <>
          <LoadingPage />
        </>
      )}
      {!loading && (
        <>
          <View>
            <View style={styles.imgContainer}>
              <Image source={{uri: image}} style={getTintColor()} />
            </View>
            {inGame && (
              <View>
                <Text style={styles.subText}>{namePoke[idWinPoke[0]]}</Text>
                {win && <Text style={styles.subText}>WIN</Text>}
                {!win && <Text style={styles.subText}>LOSE</Text>}
              </View>
            )}
            {inGame && (
              <TouchableOpacity
                onPress={() => {
                  dispatch(gameSlice.actions.startGame());
                  dispatch(getDataGame(gameData));
                }}
                style={styles.button}>
                <Text style={styles.btnText}>Start</Text>
              </TouchableOpacity>
            )}

            {!inGame && (
              <View>
                {namePoke.map((element, i) => {
                  return (
                    <View key={i}>
                      <TouchableOpacity
                        onPress={() => {
                          if (i === idWinPoke[0]) {
                            dispatch(gameSlice.actions.startGame());
                            dispatch(gameSlice.actions.setWin(true));
                          } else {
                            dispatch(gameSlice.actions.startGame());
                            dispatch(gameSlice.actions.setWin(false));
                          }
                        }}
                        style={styles.button}>
                        <Text style={styles.btnText}>{element}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            )}
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
  },
  imgContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 5,
    maxWidth: 180,
    maxHeight: 180,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 0,
    margin: 4,
    color: 'white',
    textTransform: 'capitalize',
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#903E4B',
    margin: 3,
  },
  subText: {
    textAlign: 'center',
    fontSize: 24,
    padding: 0,
    margin: 4,
    color: '#903E4B',
    textTransform: 'capitalize',
  },
});

export default Game;
