import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screen/Home';
import TabNav from './TabNav';
import Flatlist from '../Screen/Flatlist';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Bottom"
        component={TabNav}
         options={{headerShown: false,drawerItemStyle:{display:'none'}}}
      />
      <Drawer.Screen  
        name="Flatlist"
        component={Flatlist}
        options={{headerShown: false}}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
