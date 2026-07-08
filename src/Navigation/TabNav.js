import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Screen/Home';
import Account from '../Screen/Account';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#d1d1d1',

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle: styles.label,

        tabBarItemStyle: styles.tabItem,
      })}>
      
      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,

    height: 70,

    borderRadius: 20,

    backgroundColor: '#1e293b',

    elevation: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    borderTopWidth: 0,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 5,
  },

  tabItem: {
    paddingVertical: 5,
  },
});