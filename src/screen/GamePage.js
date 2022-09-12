import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Game from '../components/Game';
import {useDispatch, useSelector} from 'react-redux';
import {loadGameData} from '../store/actions/gameActions';
import LoadingPage from './LoadingPage';

const GamePage = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.game);

  useEffect(() => {
    dispatch(loadGameData());
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {loading ? (
          <>
            <LoadingPage />
          </>
        ) : (
          <View>
            <View style={styles.containerHeader}>
              <Text style={styles.text}>Who's that pokemon?</Text>
            </View>
            <View>
              <Game />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
  },
  containerHeader: {
    borderColor: 'black',
    borderBottomWidth: 2,
    margin: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    margin: 4,
    color: 'black',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    margin: 4,
    color: 'white',
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
  },
});

export default GamePage;
