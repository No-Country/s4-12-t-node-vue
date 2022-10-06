const state = () => ({
  user: {},
  token: null,
});

const actions = {
  // async getAllProducts({ commit }) {
  //   const products = await shop.getProducts();
  //   commit("setProducts", products);
  // },
  
};

const getters = {};

const mutations = {
  // setProducts (state, products) {
  //   state.all = products
  // },
  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }

  updateUser(state, user){
    state.user = user;
  },

  setToken(state, token){
    state.token = token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
