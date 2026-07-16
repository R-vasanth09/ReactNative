import axios from 'axios';


const apiclient = axios.create({
  baseURL: 'http://192.168.31.77:5000/api/',
});

apiclient.interceptors.request.use(async config => {
 
//   const token = await AsyncStorage.getItem('TOKEN');

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
});

export default apiclient;
