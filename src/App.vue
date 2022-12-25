<script>
import { useToast } from 'vue-toastification';
import NavbarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';
import Web3 from './services/Web3';

export default {
  data() {},
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    showToast() {
      this.toast.error('Pisuns');
    },
  },
  components: { NavbarVue, FooterVue },
  async mounted() {
    const wallet = await Web3.getWallet();
    if (wallet) {
      this.$store.commit('setAddress', wallet);
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
