import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomePage from './src/screen/HomePage';
import FavoritePage from './src/screen/FavoritePage';
import ComparePage from './src/screen/ComparePage';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ComparePage />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#DDBEC3',
    flex: 1,
  },
});
export default App;
