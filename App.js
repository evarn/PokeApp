import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TabNavigation from './src/navigation/tabNavigation';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TabNavigation />
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
