import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export default instance;
