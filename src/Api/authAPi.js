import apiclient from './apiclient';

// console.log('API CLIENT:', apiclient);

// SIGNUP API
export const signup = data => {

  return apiclient.post('auth/signup', data);
};

export const login = data => {
  console.log('Login Data:', data);
  return apiclient.post('auth/login', data);
};
