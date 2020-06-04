const state = {
  todos: [],
  error: null,
};

const getters = {};

const actions = {
  async getTodos({ commit }) {
    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        commit("setTodos", res.message);
      } else if (res.error) {
        commit("setTodosErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
        setTimeout(() => commit("clearTodosErr"), 2000);
      } else {
        commit("setTodosErr", res.message);
        setTimeout(() => commit("clearTodosErr"), 2000);
      }
    } catch (err) {
      console.log(err);
      commit("setTodosErr", "Something went wrong (╯°□°）╯︵ ┻━┻)");
      setTimeout(() => commit("clearTodosErr"), 2000);
    }
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  setTodosErr(state, err) {
    state.error = err;
  },
  clearTodosErr(state) {
    state.error = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
