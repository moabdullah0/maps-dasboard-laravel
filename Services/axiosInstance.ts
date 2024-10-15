import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "https://tvet.alter-company.com/",
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession(); 
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`; 
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;