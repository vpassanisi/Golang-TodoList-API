<script>
  import TodoUpdate from "./TodoUpdate.svelte";
  import { fade } from "svelte/transition";
  import { todos } from "../stores/todos.js";
  import { onMount } from "svelte";

  export let todo;
  const { UpdateTodo, DeleteTodo } = todos;
  let show = false;
  let day;
  let month;

  const changeShow = () => {
    show = !show;
  };

  onMount(() => {
    const date = new Date(todo.createdAt * 1000);
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "2-digit"
    });
    [{ value: month }, , { value: day }] = dateTimeFormat.formatToParts(date);
  });
</script>

<div
  transition:fade|local={{ duration: 300 }}
  class="flex flex-row items-center justify-between w-full dark:bg-dark-gray-800
  bg-gray-300 dark:text-white border border-gray-500 p-2">
  <input
    type="checkbox"
    name="isDone"
    class="mx-4"
    bind:checked={todo.done}
    on:change={() => UpdateTodo({ done: todo.done }, todo._id)} />
  <div class="w-full h-full">
    <div>{todo.title}</div>
    <small>{todo.description} {` - ${day}/${month}`}</small>
  </div>
  <div class="flex flex-row items-center justify-center mx-2">
    <button
      on:click={() => {
        show = !show;
      }}
      class="flex">
      <i class="material-icons">edit</i>
    </button>
  </div>
  <div class="flex flex-row items-center justify-center mx-2">
    <button on:click={() => DeleteTodo(todo._id)} class="flex">
      <i class="material-icons">cancel</i>
    </button>
  </div>
</div>
{#if show}
  <TodoUpdate {changeShow} id={todo._id} {todo} />
{/if}
