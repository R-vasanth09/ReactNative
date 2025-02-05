import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screen/Home';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Bottom"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
