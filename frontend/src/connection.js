import axios from 'axios';

const Url ='http://localhost:5000'
// Create a custom Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: Url, // Replace with your API's base URL
});

// Add a request interceptor to dynamically set the token if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // console.log("TOKEN: ",token);
    if (token) {

      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export { axiosInstance, Url }
