const state = {
  darkMode: false,
};

const getters = {
  darkMode: (state) => state.darkMode,
};

const actions = {
  turnOn({ commit }) {
    document.documentElement.classList.add("mode-dark");

    commit("setOn");
  },
  turnOff({ commit }) {
    document.documentElement.classList.remove("mode-dark");

    commit("setOff");
  },
};

const mutations = {
  setOn(state) {
    state.darkMode = true;
  },
  setOff(state) {
    state.darkMode = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
