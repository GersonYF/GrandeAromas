import axios from 'axios';
import API from './API';

const authAPI = new API('auth', 'http://localhost:3003');

export const login = (credentials) => {
  return axios.post(`${authAPI.BASE_URL}/login`, credentials);
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${authAPI.BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
