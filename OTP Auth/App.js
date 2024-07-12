import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Dashboard from './Dashboard.js';
import HomePage from './HomePage.js';
import Profile from './Profile.js';
import PhoneSignIn from './PhoneSignIn.js';

const App = () => {
  return(
    
      
        <PhoneSignIn/>
    
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
});

export default App;