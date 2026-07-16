import React, {useState} from 'react';

import {View, TextInput, Button, Alert} from 'react-native';

import {login} from '../Api/authAPi';
import {saveToken} from '../storage/authStorage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({
        email: email,
        password: password,
      });

      console.log(response.data);

      Alert.alert('Success', 'Login Successful');
      navigation.navigate('Drawer');
    } catch (error) {
      console.log(error.response?.data || error);

      Alert.alert('Error', 'Invalid Credentials');
    }
  };

  return (
    <View style={{padding: 20, marginTop: 100}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
