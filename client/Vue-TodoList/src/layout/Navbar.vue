<template>
  <div class="w-full h-16 bg-vue-green-400 shadow">
    <div
      class="flex flex-row items-center justify-between w-90p mx-auto h-full"
    >
      <div
        class="flex items-center justify-center h-full text-3xl font-hairline"
      >
        TodoList
      </div>
      <div class="flex flex-row h-full">
        <Fragment v-if="$mq === 'sm'">
          <button
            class="flex h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            <i class="material-icons">menu</i>
          </button>
        </Fragment>
        <Fragment v-else>
          <button
            v-if="isAuthenticated"
            v-on:click="logout"
            class="flex h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            Logout
          </button>
          <button
            v-if="darkMode"
            v-on:click="turnOff"
            class="flex h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            <i class="material-icons">brightness_7</i>
          </button>
          <button
            v-else
            v-on:click="turnOn"
            class="flex h-full px-2 hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none"
          >
            <i class="material-icons">brightness_4</i>
          </button>
        </Fragment>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {
    Fragment,
  },
  methods: {
    ...mapActions(["turnOn", "turnOff", "logout"]),
  },
  computed: mapState({
    darkMode: (state) => state.darkMode.darkMode,
    isAuthenticated: (state) => state.auth.isAuthenticated,
  }),
};
</script>
