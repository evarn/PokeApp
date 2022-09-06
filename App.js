import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TabNavigation from './src/navigation/tabNavigation';
import {store, persistor} from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <TabNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
