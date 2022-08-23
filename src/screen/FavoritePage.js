import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const FavoritePage = () => {
  return (
    <View>
      <Text style={styles.Text}> Favorite Page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    fontSize: 36,
    padding: 0,
    color: 'black',
  },
});

export default FavoritePage;
