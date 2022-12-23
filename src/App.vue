<script>
import { useToast } from 'vue-toastification';
import NavbarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';

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
};
</script>

<template>
  <NavbarVue />
  <div class="flex justify-center items-center">
    <router-view/>
  </div>
  <FooterVue/>
</template>
