import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Account from '../Screen/Account';
import TabNav from '../Navigation/TabNav';
import DrawerNav from '../Navigation/DrawerNav';
import Flatlist from '../Screen/Flatlist';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const StcakNav = () => {
  const [IsLogined, setIsLogined] = React.useState(false);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('Token');
    if (token) {
      setIsLogined(true);
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Stack.Navigator>
      {IsLogined ? (
        // After Login
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      ) : (
        // Before Login
        <>
          {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> */}

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </>
      )}
      {/* <Stack.Screen
        name="Drawer"
        component={DrawerNav}
        options={{headerShown: false}}
      /> */}
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
      {/* <Stack.Screen
      name="Notification"
      component={Notification}
      options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Flatlist"
        component={Flatlist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StcakNav;
