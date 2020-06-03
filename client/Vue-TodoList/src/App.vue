<template>
  <button v-on:click="darkModeToggle">darkMode {{ darkMode.darkMode }}</button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["turnOn", "turnOff"]),
    darkModeToggle() {
      if (this.darkMode) {
        this.turnOff();
      } else {
        this.turnOn();
      }
    }
  },
  computed: mapState({
    darkMode: state => state.darkMode.darkMode
  }),
  components: {}
};
</script>

<style></style>
