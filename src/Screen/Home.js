import {StyleSheet, Text, TouchableOpacity, View,Button} from 'react-native';
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
      <Button
        title="Open Top Tabs"
        onPress={() => navigation.navigate('TopTab')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
