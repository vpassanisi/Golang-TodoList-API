<script>
  import Todo from "../Components/Todo.svelte";
  import NewTodo from "../Components/NewTodo.svelte";
  import { flip } from "svelte/animate";
  import { todos } from "../stores/todos.js";
  import { onMount } from "svelte";
  import { auth } from "../stores/auth.js";
  import { push } from "svelte-spa-router";

  onMount(() => {
    if ($auth === false) {
      push("/");
      return;
    }
    todos.GetTodos();
  });
</script>

<section>
  <div
    class="flex flex-col items-center justify-center mx-auto w-90p
    max-w-screen-md">
    <NewTodo />
    {#each $todos as todo (todo._id)}
      <div class="w-full" animate:flip={{ duration: 500 }}>
        <Todo {todo} />
      </div>
    {/each}
  </div>
</section>
