<script>
import NavbarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';
import Web3 from './services/Web3';

export default {
  methods: {
    subscribeOnChanges() {
      Web3.onChainChange(this.onChainChange);
      Web3.onAccountChange(this.onAccountChange);
    },
    onChainChange(chainId) {
      let decChainId = chainId;
      if (typeof chainId === 'string') {
        decChainId = parseInt(chainId, 16);
      }
      this.$store.commit('setChainId', decChainId);
    },
    onAccountChange(accounts) {
      this.$store.commit('setAddress', accounts[0]);
    },
  },
  computed: {
    address() {
      return this.$store.state.address;
    },
  },
  watch: {
    address() {
      this.subscribeOnChanges();
    },
  },
  components: { NavbarVue, FooterVue },
  async mounted() {
    const wallet = await Web3.getWallet();
    if (wallet) {
      this.$store.commit('setAddress', wallet);
      const chain = await Web3.getChainId();
      this.$store.commit('setChainId', chain);
      this.subscribeOnChanges();
    }
  },
};
</script>

<template>
  <NavbarVue />
  <div class="flex justify-center items-center pt-16">
    <router-view />
  </div>
  <FooterVue />
</template>
