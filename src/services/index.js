import axios from "axios";

const URL_BASE_API = "https://ghibliapi.herokuapp.com/api/";

export const ApiRequest = axios.create({
  baseURL: URL_BASE_API,
  headers: { "Content-Type": "application/json" },
});

const validResponseFormat = /[2]\d\d/;

ApiRequest.interceptors.response.use((response, error) => {
  if (!validResponseFormat.test(response.status)) {
    return Promise.reject(error);
  } else {
    return response.data;
  }
});
