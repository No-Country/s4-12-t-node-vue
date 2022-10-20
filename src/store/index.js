import { createStore, createLogger } from "vuex";
// import cart from "./modules/cart";
import products from "./modules/product";
import auth from "./modules/auth";
import axios from "axios";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    products,
    auth,
  },
  state: {

    products: [],
  
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  mutations: {
    obtenerProductos(state, payload) {
      state.products = payload;
    },
  },

  actions: {
    async getProducts({ commit }) {
      const resp = await axios.get(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/api/products"
      );
      const data = resp.data;
      commit("obtenerProductos", data);
    },
  },
});
