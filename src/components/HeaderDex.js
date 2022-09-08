import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../assets/heart.png';
import HeartClicked from '../../assets/heart_clicked.png';

import Compare from '../../assets/arrow.png';
import {useDispatch} from 'react-redux';

import {pokeSlice} from '../store/slices/pokeSlice';

const HeaderDex = item => {
  const dispatch = useDispatch();

  const addToFavorite = element => {
    const id = element.item.id - 1;
    dispatch(pokeSlice.actions.setFavorite(id));
  };

  return (
    <View style={styles.headerContainer}>
      {/* <TouchableOpacity
        onPress={() => {
          console.warn('Compare click');
        }}>
        <Image source={Compare} style={styles.image} />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => addToFavorite(item)}>
        <Image
          source={
            item.item.isFavorite === false || item.item.isFavorite === undefined
              ? Heart
              : HeartClicked
          }
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
    paddingHorizontal: 7,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default HeaderDex;
