<template>
  <div>
    <div
      class="fixed flex flex-col items-center left-0 top-0 bottom-0 h-full w-48 bg-white dark:bg-dark-gray-800 transform z-10 transition-transform transform duration-300 ease-in-out shadow"
      v-bind:class="{ '-translate-x-48': !isOpen }"
    >
      <button
        v-on:click="toggleDarkMode"
        class="flex items-center justify-center w-full h-16 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600"
      >
        <i v-if="darkMode" class="material-icons text-white">brightness_7</i>
        <i v-else class="material-icons">brightness_4</i>
      </button>
      <button
        v-if="isAuthenticated"
        v-on:click="handleLogout"
        class="dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600"
      >Logout</button>
      <button
        v-if="!isAuthenticated"
        v-on:click="pushLogin"
        class="dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600"
      >Login</button>
      <button
        v-if="!isAuthenticated"
        v-on:click="pushRegister"
        class="dark:text-white w-full hover:bg-black-alpha-20 transition-colors duration-300 ease-in-out py-4 focus:outline-none border-b-2 border-gray-300 dark:border-gray-600"
      >Register</button>
    </div>
    <button
      class="fixed left-0 right-0 top-0 bottom-0 transition-colors duration-300 ease-in-out focus:outline-none"
      v-bind:class="{ 'bg-black-alpha-50 h-full w-full': isOpen }"
      v-on:click="toggleIsOpen"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Sidebar",
  props: ["isOpen", "toggleIsOpen"],
  methods: {
    ...mapActions(["turnOn", "turnOff", "logout"]),
    toggleDarkMode() {
      this.darkMode ? this.turnOff() : this.turnOn();
    },
    handleLogout() {
      this.logout(), this.toggleIsOpen();
    },
    pushLogin() {
      if (this.$router.currentRoute.path !== "/") this.$router.push("/");
      this.toggleIsOpen();
    },
    pushRegister() {
      if (this.$router.currentRoute.path !== "/register")
        this.$router.push("/register");
      this.toggleIsOpen();
    }
  },
  computed: mapState({
    darkMode: state => state.darkMode.darkMode,
    isAuthenticated: state => state.auth.isAuthenticated
  })
};
</script>