import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      showDrawer: false,
    };
  },
  mutations: {
    setDrawer(state, status) {
      state.showDrawer = status;
    },
  },
});

export default store;
