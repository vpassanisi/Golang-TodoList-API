<template>
  <div>
    <NewTodo />
    <div
      class="flex flex-col items-center justify-center bg-gray-900 dark:bg-gray-300 text-white dark:text-black mt-24 w-90p mx-auto max-w-screen-sm p-4 rounded shadow"
    >
      <Todo v-for="todo in todos" v-bind:key="todo._id" v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NewTodo from "../components/NewTodo.vue";
import Todo from "../components/Todo.vue";

export default {
  name: "Todos",
  components: {
    Todo,
    NewTodo
  },
  methods: {
    ...mapActions(["getTodos"])
  },
  computed: mapState({
    todos: state => state.todosState.todos,
    isAuthenticated: state => state.auth.isAuthenticated
  }),
  mounted: function() {
    if (this.isAuthenticated) {
      this.getTodos();
    } else {
      this.$router.push("/");
    }
  }
};
</script>
