<script>
import ClickOutSide from '../directives/ClickOutSide';

export default {
  data() {
    return {
      openMenu: false,
    };
  },
  props: {
    account: String,
  },
  methods: {
    closeMenu() {
      if (this.openMenu) {
        this.openMenu = false;
      }
    },
  },
  directives: {
    ClickOutSide,
  },
};
</script>
<template>
  <div v-if="!account" class="btn">Connect wallet</div>
  <div v-else>
    <div class="dropdown dropdown-end" :class="{ 'dropdown-open': openMenu }">
      <label
        v-click-out-side="closeMenu"
        @click="openMenu = !openMenu"
        class="mr-5 flex bg-neutral rounded-full transform transition duration-200 hover:scale-110 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-8 h-8 border-2 border-secondary p-1 rounded-full fill-secondary"
        >
          <path
            d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z"
          />
        </svg>
        <span class="mt-1 ml-2 mr-2 select-none"
          >{{ account.substring(0, 2) }}...{{
            account.substring(account.length - 4, account.length)
          }}</span
        >
      </label>
      <ul
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" :class="{'hidden': !openMenu}"
      >
        <router-link to="/wallet/invest">
          <li>
            <p class="justify-between">
              Wallet
              <span class="badge">New</span>
            </p>
          </li>
        </router-link>
        <li><p>Disconnect wallet</p></li>
      </ul>
    </div>
  </div>
</template>
