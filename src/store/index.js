import { createStore, createLogger } from "vuex";
// import cart from "./modules/cart";
import products from "./modules/product";
import auth from "./modules/auth";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    products,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
