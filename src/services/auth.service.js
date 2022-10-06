import Cookies from "js-cookie";
import { ApiRequest } from "@/service/index";

const login = (user, pass) => {
  return ApiRequest.post("/users/login", {
    email: user,
    password: pass,
  });
};

const get = () => {
  return ApiRequest.get("/users");
};

const register = (name, lastname, email, password, confirmPassword) => {
  console.log(name, lastname, email, password, confirmPassword);
  return ApiRequest.post("/users/signup", {
    nombre: name,
    apellidos: lastname,
    email,
    password,
    confirmarPassword: confirmPassword,
  });
};

const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
const setAccessToken = (userLogged) => {
  Cookies.set("userLogged", userLogged, {
    expires: inFifteenMinutes,
  });
};

const getAccessToken = () => {
  return Cookies.get("userLogged");
};

const deleteAccessToken = () => {
  Cookies.remove("userLogged");
};

export default {
  login,
  register,
  get,
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
};
