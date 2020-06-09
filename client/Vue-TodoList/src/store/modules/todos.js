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
        commit("sortTodos");
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
  async newTodo({ commit }, body) {
    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const res = await req.json();

      if (res.success) {
        commit("setNewTodo", res.message);
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
  async updateTodo({ commit }, { body, id }) {
    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const res = await req.json();

      if (res.success) {
        commit("setUpdateTodo", res.message);
        commit("sortTodos");
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
  async deleteTodo({ commit }, id) {
    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        commit("setDeleteTodo", id);
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
  setNewTodo(state, todo) {
    state.todos = [todo, ...state.todos];
  },
  setUpdateTodo(state, todo) {
    const index = state.todos.findIndex((val) => val._id === todo._id);

    state[index] = todo;
  },
  setDeleteTodo(state, id) {
    const index = state.todos.findIndex((val) => val._id === id);

    state.todos.splice(index, 1);
  },
  sortTodos(state) {
    let done = state.todos.filter((todo) => todo.done);
    let notDone = state.todos.filter((todo) => !todo.done);

    done.sort((a, b) => b.createdAt - a.createdAt);
    notDone.sort((a, b) => b.createdAt - a.createdAt);

    state.todos = [...notDone, ...done];
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
