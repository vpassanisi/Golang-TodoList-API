<script>
  import UpdateTodo from "./UpdateTodo.svelte";
  import { fade } from "svelte/transition";
  import { todos } from "../stores/todos.js";

  export let todo;
  let show = false;

  const changeShow = () => {
    show = !show;
  };
</script>

<div
  transition:fade|local={{ duration: 300 }}
  class="flex flex-wrap items-center justify-between w-full
  dark:bg-dark-gray-800 bg-gray-300 dark:text-white border border-gray-500 p-2">
  <div class="w-1/3">
    <div>Title:</div>
    <div>{todo.title}</div>
  </div>
  <div class="w-1/3">
    <div>Description:</div>
    <div>{todo.description}</div>
  </div>
  <div class="flex flex-wrap items-center justify-between w-1/3">
    <div class="flex flex-row items-center w-1/3">
      <label class="mr-2" for="isDone">Done:</label>
      <input
        type="checkbox"
        name="isDone"
        checked={todo.isDone}
        bind:value={todo.isDone}
        on:change={() => console.log(todo.isDone)} />
    </div>
    <div class="flex flex-row items-center justify-center w-1/3">
      <button on:click={() => (show = !show)} class="flex">
        <i class="material-icons">edit</i>
      </button>
    </div>
    <div class="flex flex-row items-center justify-center w-1/3">
      <button on:click={() => todos.DeleteTodo(todo._id)} class="flex">
        <i class="material-icons">cancel</i>
      </button>
    </div>
    <div class="flex flex-row items-center justify-end w-full">
      <small>{todo.createdAt}</small>
    </div>
  </div>
</div>
{#if show}
  <UpdateTodo {changeShow} id={todo._id} {todo} />
{/if}
