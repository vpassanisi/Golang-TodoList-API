<template>
  <Fragment>
    <Navbar />
    <router-view />
    <Error />
  </Fragment>
</template>

<script>
import { mapActions } from "vuex";
import { Fragment } from "vue-fragment";
import Navbar from "./layout/Navbar.vue";
import Error from "./layout/Error.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Error,
    Fragment,
  },
  methods: {
    ...mapActions(["turnOn"]),
  },
  mounted: function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.turnOn();
    }
  },
};
</script>
