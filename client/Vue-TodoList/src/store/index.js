import Vue from "vue";
import Vuex from "vuex";

import darkMode from "./modules/darkMode";
import auth from "./modules/auth";
import todosState from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    darkMode,
    auth,
    todosState,
  },
});
