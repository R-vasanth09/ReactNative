import apiclient from './apiclient';

export const getProducts = async () => {
  return await apiclient.get('/products');
};

export const addprduct = async data => {
  return await apiclient.post('/products', data);
};

export const updateprduct = async (id, data) => {
  return await apiclient.put(`/products/${id}`, data);
};

export const deleteprduct = async id => {
  return await apiclient.delete(`/products/${id}`);
};

// LOGIN API
export const loginUser = data => {
  return apiclient.post('/auth/login', data);
};

// SIGNUP API
export const signupUser = data => {
  return apiclient.post('auth/register', data);
};
