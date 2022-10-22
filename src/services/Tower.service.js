import { ApiRequest } from "@/services/index";

const addTorre = (name) => {
  return ApiRequest.post("/add_torre", {
    name,
  });
};

const getTorres = () => {
  return ApiRequest.get("/getTorres");
};

export default {
  addTorre,
  getTorres,
};
