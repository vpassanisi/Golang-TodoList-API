<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { error } from "../stores/error.js";
</script>

<!-- if there is an error this component shows itself with the content of the error -->
{#if $error !== null}
  <div
    class="fixed bottom-0 w-full h-16 bg-red-700 text-white flex flex-row
    items-center justify-center text-3xl"
    transition:fly={{ duration: 300, x: 0, y: -50, easing: quintOut }}>
    {$error}
  </div>
{/if}
