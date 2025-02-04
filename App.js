import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StcakNav from './src/Navigation/StcakNav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StcakNav />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
