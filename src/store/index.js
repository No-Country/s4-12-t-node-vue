import { createStore, createLogger } from "vuex";
// import cart from "./modules/cart";
// import products from "./modules/product";
import auth from "./modules/auth";
import axios from "axios";

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
