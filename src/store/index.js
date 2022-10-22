import { createStore, createLogger } from "vuex";
import auth from "./modules/auth";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
  },
  state: {
    products: [],
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
