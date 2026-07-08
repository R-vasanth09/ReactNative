import React, {useState} from 'react';

import {
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import { signupUser } from '../Api/productApi';

const Signup = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {

      const response = await signupUser({
       username: email,
       password: password,
      });

      console.log(response.data);

      Alert.alert('Success', 'Signup Successful');
       navigation.replace('Drawer');
      

    } catch (error) {
      console.log(error.response?.data || error);

      Alert.alert('Error', 'Signup Failed');
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

      <Button
        title="Signup"
        onPress={handleSignup}
      />
    </View>
  );
};

export default Signup;