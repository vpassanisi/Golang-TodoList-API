import { router } from "../../main";

const state = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const getters = {};

const actions = {
  async login({ commit }, cred) {
    try {
      const req = await fetch(`/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(cred),
      });

      const res = await req.json();

      if (res.success) {
        commit("setLogin", res.message);
        router.push("/todos");
      } else if (res.error) {
        commit("setErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
        setTimeout(() => commit("clearAuthErr"), 2000);
      } else {
        commit("setErr", res.message);
        setTimeout(() => commit("clearAuthErr"), 2000);
      }
    } catch (err) {
      console.log(err);
      commit("setErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
      setTimeout(() => commit("clearAuthErr"), 2000);
    }
  },
  async getMe({ commit }) {
    try {
      const req = await fetch(`/api/v1/auth/getMe`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        commit("setLogin", res.message);
        router.push("/todos");
      }
    } catch (err) {
      console.log(err);
    }
  },
  async logout({ commit }) {
    try {
      const req = await fetch(`/api/v1/auth/logout`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        commit("setLogout");
        router.push("/");
      } else if (res.error) {
        commit("setErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
        setTimeout(() => commit("clearAuthErr"), 2000);
      } else {
        commit("setErr", res.message);
        setTimeout(() => commit("clearAuthErr"), 2000);
      }
    } catch (err) {
      console.log(err);
      commit("setErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
      setTimeout(() => commit("clearAuthErr"), 2000);
    }
  },
};

const mutations = {
  setLogin(state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  setLogout(state) {
    state.user = null;
    state.isAuthenticated = false;
  },
  setErr(state, err) {
    state.error = err;
  },
  clearAuthErr(state) {
    state.error = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
