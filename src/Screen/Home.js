import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const drawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <TouchableOpacity onPress={drawer}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
