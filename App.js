import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/tabNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
