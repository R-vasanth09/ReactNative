import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('TOKEN', token);
  } catch (error) {
    console.log(error);
  }
};


export const getToken = async () => {
  return await AsyncStorage.getItem('TOKEN');
};

export const removeToken = async () => {
  await AsyncStorage.removeItem('TOKEN');
};