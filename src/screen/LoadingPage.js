import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 24,
    padding: 0,
    color: 'black',
  },
  container: {
    backgroundColor: '#DDBEC3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingPage;
