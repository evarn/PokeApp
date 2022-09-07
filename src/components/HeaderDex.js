import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../assets/heart.png';
import Compare from '../../assets/arrow.png';
import {useDispatch, useSelector} from 'react-redux';
import {favoriteSlice} from '../store/slices/favoriteSlice';

const HeaderDex = item => {
  const dispatch = useDispatch();
  const {favorite} = useSelector(state => state.favorite);
  //const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorite = items => {
    // console.warn(items);
    // isFavorite
    //   ? dispatch(favoriteSlice.actions.deleteFavorites(items))
    //   : dispatch(favoriteSlice.actions.addFavorites(items));
    // //setIsFavorite(!isFavorite);
    dispatch(favoriteSlice.actions.addFavorites(items));
  };

  //const [favorite, setFavorite] = useState([]);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          console.warn('Compare click');
        }}>
        <Image source={Compare} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => addToFavorite(item)}
        // onPress={() => {
        //   console.warn('Like click');
        //   //setFavorite(item);
        //   // dispatch(favoriteSlice.actions.setFavorites(item));
        //   //console.warn(favorite);
        //   addToFavorite(item);
        // }}
      >
        <Image source={Heart} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 7,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default HeaderDex;
