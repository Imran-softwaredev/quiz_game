import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API response error:", error);
    return Promise.reject(error);
  },
);

export default API;
