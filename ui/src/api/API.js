import axios from 'axios';

const BASE_URL = 'api';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      // Possibly redirect to login page or show a message
    }
    return Promise.reject(error);
  }
);

class API {
  constructor(endpoint, host = "http://localhost:3002") {
    this.endpoint = endpoint;
    this.host = host;
    this.BASE_URL = `${this.host}/${BASE_URL}/${this.endpoint}`;
  }

  create(data) {
    return axios.post(`${this.BASE_URL}`, data).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  getAll() {
    return axios.get(`${this.BASE_URL}`).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  getById(id) {
    return axios.get(`${this.BASE_URL}/${id}`).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  update(id, data) {
    return axios.put(`${this.BASE_URL}/${id}`, data).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  delete(id) {
    return axios.delete(`${this.BASE_URL}/${id}`).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  getReviewsByProductId(productId) {
    return axios.get(`${this.BASE_URL}/${productId}/reviews`).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }

  getOrdersByMe() {
    return axios.get(`${this.BASE_URL}/me`).catch(error => {
      console.error('API Error:', error);
      throw error;
    });
  }
}

export default API;
