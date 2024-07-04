import axios from "axios";
import { notifyError } from "../utilities/toastify";

const Api = axios.create({
  baseURL: "http://16.170.247.231:3005",
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const handleApiError = (error) => {
  try {
    if (Array.isArray(error?.response?.data)) {
      error.response.data.map((e) => notifyError(e.message));
    } else {
      const errorMes =
        error.response?.data?.error || error.response?.data?.message;
      console.log(errorMes);
      notifyError(errorMes);
    }
    return error.response.data.error;
  } catch (error) {
    console.log(error);
  }
};

export default Api;
