import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StcakNav from './src/Navigation/StcakNav';

const App = () => {
  return (
    <NavigationContainer>
      <StcakNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
