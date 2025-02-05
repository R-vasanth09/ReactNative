import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Account from '../Screen/Account';
import TabNav from '../Navigation/TabNav';
import DrawerNav from '../Navigation/DrawerNav';

const Stack = createNativeStackNavigator();

const StcakNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StcakNav;
