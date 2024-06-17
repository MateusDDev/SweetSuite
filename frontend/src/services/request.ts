import axios from 'axios';
import { NewEntity } from '../types/NewEntity';
import { UserType } from '../types/UserTypes';

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:5000',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const localToken = localStorage.getItem('token');
if (localToken) {
  setToken(localToken);
}

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint: string, body: NewEntity<UserType>):
Promise<{ token: string }> => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
