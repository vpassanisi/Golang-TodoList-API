<template>
  <!-- form component for creating a new todo -->
  <div
    class="flex flex-col mx-auto mt-24 bg-gray-900 dark:bg-gray-300 w-90p max-w-screen-sm p-4 rounded shadow"
  >
    <div
      class="text-white dark:text-black text-4xl font-hairline text-center mb-4"
    >
      New Todo
    </div>
    <input
      class="text-white dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4"
      type="text"
      placeholder="Title"
      name="title"
      v-model="newTodoData.title"
    />
    <input
      class="text-white dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4"
      type="text"
      placeholder="Description"
      name="description"
      v-model="newTodoData.description"
    />
    <button
      class="w-full p-2 bg-vue-green-500 rounded shadow focus:outline-none"
      v-on:click="newTodo(newTodoData)"
    >
      Add
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewTodo",
  methods: {
    ...mapActions(["newTodo"]),
    handleAddNewTodo: function() {
      this.newTodo(this.newTodoData);
    },
  },
  data: () => {
    return {
      newTodoData: {},
    };
  },
};
</script>
