import Cookies from "js-cookie";
import { ApiRequest } from "@/services/index";

const login = (user, pass) => {
  return ApiRequest.post("/api/login", {
    email: user,
    password: pass,
  });
};

const get = () => {
  return ApiRequest.get("/users");
};

const signup = (name, lastname, email, password, confirmPassword) => {
  console.log(name, lastname, email, password, confirmPassword);
  return ApiRequest.post("/api/signup", {
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
  signup,
  get,
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
};
