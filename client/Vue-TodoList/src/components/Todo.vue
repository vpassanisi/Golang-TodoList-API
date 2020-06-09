<template>
  <div
    class="flex flex-row items-center justify-center w-full border-2 border-gray-300 dark:border-gray-800 p-2 m-1"
  >
    <input
      class="mx-4"
      type="checkbox"
      v-model="todo.done"
      v-on:change="handleChecked()"
    />
    <div class="w-full">
      <div>{{ todo.title }}</div>
      <small>{{ todo.description }} {{ ` - ${month}/${day}` }}</small>
    </div>
    <button
      class="flex mx-4 focus:outline-none"
      v-on:click="deleteTodo(todo._id)"
    >
      <i class="material-icons text-red-800">clear</i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["todo"],
  data: () => {
    return {
      day: null,
      month: null,
    };
  },
  methods: {
    ...mapActions(["updateTodo", "deleteTodo"]),
    handleChecked() {
      this.updateTodo({
        body: { done: this.todo.done },
        id: this.todo._id,
      });
    },
  },
  mounted: function() {
    const date = new Date(this.todo.createdAt * 1000);
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "2-digit",
    });
    const [{ value: month }, , { value: day }] = dateTimeFormat.formatToParts(
      date
    );

    this.day = day;
    this.month = month;
  },
};
</script>
