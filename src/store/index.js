import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      showDrawer: false,
      showConnectModal: false,
      address: undefined,
    };
  },
  mutations: {
    setDrawer(state, status) {
      state.showDrawer = status;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setConnectModal(state, status) {
      state.showConnectModal = status;
    },
  },
});

export default store;
