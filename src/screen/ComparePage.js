import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ImageBg from '../../assets/whos_that_pokemon.png';
import Game from '../components/Game';
import {useDispatch, useSelector} from 'react-redux';
import {gameSlice} from '../store/slices/gameSlice';
import {loadGameData} from '../store/actions/gameActions';
import {getNamePoke} from '../store/actions/gameActions';
import LoadingPage from './LoadingPage';

const ComparePage = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.game);
  useEffect(() => {
    dispatch(loadGameData());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.text}>Who's that pokemon?</Text>
      </View>
      <View>
        <Game />
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

export default ComparePage;
