import { createStore, createLogger } from "vuex";
// import cart from "./modules/cart";
import products from "./modules/product";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    products,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
