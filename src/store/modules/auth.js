const state = () => ({
  all: [],
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
