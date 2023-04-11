import axios from 'axios';

const req = axios.create({
  baseURL: '/oklink',
  headers: {
    'Ok-Access-Key': 'b808c04f-37cd-47fd-aac8-8ffaf8a7c34c',
  },
});

req.interceptors.response.use(function (response) {
  return response.data.data[0];
}, function (error) {
  return Promise.reject(error);
});


export default req