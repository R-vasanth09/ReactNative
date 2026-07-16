import React, {useState} from 'react';

import {
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {signup} from '../Api/apiclient';

const Signup = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await signup({
        name: username,
        email: email,
        password: password,
      });

      console.log('Signup Response:', response.data);

      Alert.alert('Success', response.message || 'Signup Successful');

      navigation.replace('Login');
    } catch (error) {
      console.log('Signup Error:', error.response?.data || error.message);

      Alert.alert('Error', error.response?.data?.message || 'Signup Failed');
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