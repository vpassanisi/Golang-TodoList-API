import Vue from "vue";
import Vuex from "vuex";

import darkMode from "./modules/darkMode";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    darkMode,
  },
});
