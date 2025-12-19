import axios from "axios";
import { SERVER_URL } from "../config/env.js";

const api = axios.create({
  baseURL: `${SERVER_URL}/api/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ------------------------
   REQUEST INTERCEPTOR
------------------------- */
// api.interceptors.request.use(
//   (config) => {
//     // Example: attach token later if needed
//     // const token = localStorage.getItem("token");
//     // if (token) config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

/* ------------------------
   RESPONSE INTERCEPTOR
------------------------- */
// api.interceptors.response.use(
//   (response) => response.data, // always return data only
//   (error) => {
//     // Centralized error handling
//     if (error.response) {
//       return Promise.reject({
//         status: error.response.status,
//         message: error.response.data?.message || "Server Error",
//       });
//     }

//     return Promise.reject({
//       status: 0,
//       message: "Network Error",
//     });
//   }
// );

export default api;
