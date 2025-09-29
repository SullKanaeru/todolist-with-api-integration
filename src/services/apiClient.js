import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.log("API Error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
