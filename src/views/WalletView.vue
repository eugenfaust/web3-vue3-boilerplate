<script>
import DashboardVue from './wallet/DashboardView.vue';
import InvestView from './wallet/InvestView.vue';
import SettingsView from './wallet/SettingsView.vue';

export default {
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
      this.$store.commit('setDrawer', false);
    },
  },
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer;
    },
    currentView() {
      return this.$route.path.split('/')[2];
    },
  },
  mounted() {
    this.$store.commit('setDrawer', false);
  },
  components: { DashboardVue, InvestView, SettingsView },
};
</script>
<template>
  <div class="drawer drawer-mobile mb-2">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
      :checked="showDrawer"
    />
    <div class="drawer-content flex flex-col items-center justify-center">
      <DashboardVue v-if="currentView === 'dashboard'"/>
      <SettingsView v-else-if="currentView === 'settings'"/>
      <InvestView v-else/>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <a
            :class="{ active: currentView === 'dashboard' }"
            @click="goTo('dashboard')"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            :class="{ active: currentView === 'invest' }"
            @click="goTo('invest')"
            >Your invests</a
          >
        </li>
        <li>
          <a
            :class="{ active: currentView === 'settings' }"
            @click="goTo('settings')"
            >Settings</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>
