import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import HealthDetails from './HealthDetails.js';
import Dashboard from './Dashboard.js';


const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Dashboard/>
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
