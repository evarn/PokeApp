import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {getDataGame} from '../store/actions/gameActions';
import LoadingPage from '../screen/LoadingPage';
import {useDispatch, useSelector} from 'react-redux';
import {gameSlice} from '../store/slices/gameSlice';

const Game = () => {
  const {gameData, loading} = useSelector(state => state.game);
  const {inGame, counterWin, counterLose, namePoke, idWinPoke, image, win} =
    useSelector(state => state.game);

  const dispatch = useDispatch();
  const getTintColor = () => {
    const color = inGame ? 'black' : undefined;

    const tintColor = {
      tintColor: color,
      ...styles.image,
    };
    return tintColor;
  };

  return (
    <View>
      {loading ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.imgContainer}>
                <Image source={{uri: image}} style={getTintColor()} />
              </View>

              <View style={styles.counters}>
                <Text>Wins: {counterWin} </Text>
                <Text>Losses: {counterLose} </Text>
              </View>
            </View>
            {!inGame ? (
              <View>
                <View>
                  <Text style={styles.subText}>{namePoke[idWinPoke[0]]}</Text>
                  {(counterLose !== 0 || counterWin !== 0) && win && (
                    <Text style={styles.subText}>WIN</Text>
                  )}
                  {(counterLose !== 0 || counterWin !== 0) && !win && (
                    <Text style={styles.subText}>LOSE</Text>
                  )}
                </View>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(gameSlice.actions.startGame());
                    dispatch(getDataGame(gameData));
                  }}
                  style={styles.button}>
                  <Text style={styles.btnText}>GO</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                {namePoke.map((element, i) => {
                  return (
                    <View key={i}>
                      <TouchableOpacity
                        onPress={() => {
                          if (i === idWinPoke[0]) {
                            dispatch(gameSlice.actions.startGame());
                            dispatch(gameSlice.actions.setWin(true));
                            dispatch(gameSlice.actions.setWinCounter());
                          } else {
                            dispatch(gameSlice.actions.startGame());
                            dispatch(gameSlice.actions.setWin(false));
                            dispatch(gameSlice.actions.setLoseCounter());
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
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 5,
    maxWidth: 180,
    maxHeight: 180,
  },
  image: {
    width: 200,
    height: 200,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 0,
    margin: 4,
    color: 'white',
    textTransform: 'capitalize',
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
  counters: {
    flexDirection: 'row',
  },
});

export default Game;
