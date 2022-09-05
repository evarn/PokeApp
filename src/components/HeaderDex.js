import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../assets/heart.png';
import Compare from '../../assets/arrow.png';

const HeaderDex = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          console.warn('Compare click');
        }}>
        <Image source={Compare} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.warn('Like click');
        }}>
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
