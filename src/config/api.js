import axios from 'axios';

const req = axios.create({
  baseURL: 'https://www.oklink.com/api/v5/explorer',
  headers: {
    'Ok-Access-Key': 'b808c04f-37cd-47fd-aac8-8ffaf8a7c34c',
  },
});

req.interceptors.response.use(
  (response) => response.data.data[0],
  (error) => Promise.reject(error),
);

export default req;
