<script>
  import { todos } from "../stores/todos.js";
  let todo = {};
</script>

<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: rgb(255, 255, 255) !important;
  }
</style>

<div
  class="flex flex-col w-full bg-gray-300 dark:bg-gray-700 mx-auto mt-24 p-4
  shadow max-w-screen-md mb-8">
  <div class="text-center text-4xl dark:text-white font-hairline mb-4">
    New Todo
  </div>
  <input
    class="border-b-2 border-black text-black dark:text-white dark:border-white
    bg-transparent focus:border-deep-orange-a400 mb-4 p-2 transition-colors
    duration-300 ease-in-out focus:outline-none placeholder-gray-700
    dark-placeholder:placeholder-gray-300"
    type="text"
    placeholder="Title"
    name="title"
    bind:value={todo.title} />
  <textarea
    class="border-b-2 border-black dark:text-white text-black dark:border-white
    bg-transparent focus:border-deep-orange-a400 mb-4 p-2 transition-colors
    duration-300 ease-in-out focus:outline-none placeholder-gray-700
    dark-placeholder:placeholder-gray-300"
    type="text"
    placeholder="Description"
    name="description"
    bind:value={todo.description} />
  <button
    on:click={() => todos.NewTodo(todo)}
    class="bg-light-blue-400 py-2 rounded shadow focus:outline-none">
    Add
  </button>
</div>
