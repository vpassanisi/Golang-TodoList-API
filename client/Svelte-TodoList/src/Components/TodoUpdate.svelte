<script>
  import { todos } from "../stores/todos.js";
  import { slide } from "svelte/transition";

  export let changeShow;
  export let id;
  export let todo;
  let updateTodo = {};
</script>

<!-- form component for updating the title and description of the todo -->
<div
  transition:slide
  class="flex flex-row items-center bg-gray-400 dark:bg-dark-gray-700 p-2">
  <input
    class="border-b-2 border-black text-black dark:text-white dark:border-white
    bg-transparent focus:border-deep-orange-a400 mb-4 p-2 transition-colors
    duration-300 ease-in-out focus:outline-none placeholder-gray-700
    dark-placeholder:placeholder-gray-300 w-1/3 mr-2"
    placeholder="Title"
    value={todo.title}
    on:change={e => (updateTodo.title = e.target.value)}
    type="text" />
  <textarea
    class="border-b-2 border-black text-black dark:text-white dark:border-white
    bg-transparent focus:border-deep-orange-a400 mb-4 p-2 transition-colors
    duration-300 ease-in-out focus:outline-none placeholder-gray-700
    dark-placeholder:placeholder-gray-300 w-1/3 mr-2"
    placeholder="Description"
    value={todo.description}
    rows="1"
    on:change={e => (updateTodo.description = e.target.value)}
    type="text" />
  <button
    on:click={() => {
      changeShow();
      todos.UpdateTodo(updateTodo, id);
    }}
    class="w-1/3 rounded shadow h-8 bg-light-blue-400">
    Update
  </button>
</div>
