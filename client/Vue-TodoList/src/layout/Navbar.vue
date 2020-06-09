<template>
  <div class="fixed top-0 w-full h-16 bg-vue-green-400 shadow">
    <Sidebar v-bind:isOpen="isOpen" v-bind:toggleIsOpen="toggleIsOpen" />
    <div
      class="flex flex-row items-center justify-between w-90p mx-auto h-full"
    >
      <div
        class="flex items-center justify-center h-full text-3xl font-hairline"
      >
        TodoList
      </div>
      <div class="flex flex-row h-full">
        <button
          v-if="$mq === 'md' || $mq === 'sm'"
          v-on:click="isOpen = !isOpen"
          class="flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
        >
          <i class="material-icons">menu</i>
        </button>
        <div class="flex flex-row items-center justify-center h-full" v-else>
          <button
            v-if="isAuthenticated"
            v-on:click="logout"
            class="flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Logout
          </button>
          <button
            v-if="!isAuthenticated"
            v-on:click="pushRegister"
            class="flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Register
          </button>
          <button
            v-if="!isAuthenticated"
            v-on:click="pushLogin"
            class="flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Login
          </button>
          <button
            v-on:click="toggleDarkMode"
            class="flex items-center h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            <i v-if="darkMode" class="material-icons">brightness_7</i>
            <i v-else class="material-icons">brightness_4</i>
          </button>
        </div>
      </div>
    </div>
    <div id="loading" class="progress-line invisible" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Navbar",
  components: {
    Sidebar,
  },
  data() {
    return {
      isOpen: false,
      toggleIsOpen: () => {
        this.isOpen = !this.isOpen;
      },
    };
  },
  methods: {
    ...mapActions(["turnOn", "turnOff", "logout"]),
    toggleDarkMode() {
      this.darkMode ? this.turnOff() : this.turnOn();
    },
    pushRegister() {
      if (this.$router.currentRoute.path !== "/register") {
        this.$router.push("/register");
      }
    },
    pushLogin() {
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push("/");
      }
    },
  },
  computed: mapState({
    darkMode: (state) => state.darkMode.darkMode,
    isAuthenticated: (state) => state.auth.isAuthenticated,
  }),
};
</script>
