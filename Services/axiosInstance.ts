import axios from "axios";

const token = "2|gsl5cKBPpqxqLrVS6fROunolnwE3wSHNnF3yWi3s07ccd41d"; 

const axiosInstance = axios.create({
  baseURL: "https://tvet.alter-company.com/",
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken;
  }

  return config;
});

export default axiosInstance;
