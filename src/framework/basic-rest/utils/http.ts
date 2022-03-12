import axios from "axios";
import {getToken} from "./get-token";

const BAZAAR_ADMIN_BASE_URL = "http://localhost:1337",
    BAZAAR_ADMIN_REST_API_ENDPOINT = `${BAZAAR_ADMIN_BASE_URL}/api`,
    BAZAAR_ADMIN_REST_API_AUTHORIZATION_BEARER_TOKEN = "e98aa1dceaca1a514e2af37cc81cf8ec1a90c5cc7191ceff46e47e48d84b07ecd8fc1518919e88c74b85b161129f387911858d93a2251d9226d22ac07c533e216ef00d4f1a016d933f5ef644bc9897fb1b285d938c5129de73bb262969cfbfc200c181896dcdf2dee69903a850336d3ea28ca29e088a24449bd11de109a94552";
const httpV2 = axios.create({
    baseURL: BAZAAR_ADMIN_REST_API_ENDPOINT,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
httpV2.interceptors.request.use(
    (config) => {
        const token = BAZAAR_ADMIN_REST_API_AUTHORIZATION_BEARER_TOKEN;
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token ? token : ""}`,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
export { httpV2, BAZAAR_ADMIN_BASE_URL };
