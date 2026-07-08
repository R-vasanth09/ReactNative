import React, {useState} from 'react';

import {View, TextInput, Button, Alert} from 'react-native';


import { loginUser } from '../Api/productApi';
import { saveToken } from '../storage/authStorage';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser({
       username: email,
       password: password,
      });

      console.log(response.data);

      // Save Token
      await saveToken(response.data.token);

      Alert.alert('Success', 'Login Successful');
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
