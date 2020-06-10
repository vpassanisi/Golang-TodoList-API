<script>
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { darkMode } from "../stores/darkMode.js";
  import { auth } from "../stores/auth.js";
  import { push } from "svelte-spa-router";

  const { turnOff, turnOn } = darkMode;
  const { Logout } = auth;

  export let isOpen;
</script>

{#if isOpen}
  <div
    transition:fly={{ duration: 300, x: -192, easing: quintOut }}
    class="fixed flex flex-col items-center h-full top-0 left-0 w-48 bg-white
    dark:bg-dark-gray-700 z-10 shadow">
    <button
      on:click={() => {
        $darkMode ? turnOff() : turnOn();
      }}
      class="w-full py-8 focus:outline-none dark:text-white border-b-2
      border-gray-700 dark:border-gray-400">
      {#if $darkMode}
        <i class="material-icons flex items-center justify-center">
          brightness_7
        </i>
      {:else}
        <i class="material-icons flex items-center justify-center">
          brightness_4
        </i>
      {/if}
    </button>
    <a
      class="w-full text-center py-4 focus:outline-none dark:text-white
      border-b-2 transition-colors duration-300 ease-in-out border-gray-700
      dark:border-gray-400 hover:bg-white-alpha-30"
      href="/">
      Pick A Framework
    </a>
    {#if $auth}
      <button
        class="w-full py-4 focus:outline-none dark:text-white border-b-2
        transition-colors duration-300 ease-in-out border-gray-700
        dark:border-gray-400 hover:bg-white-alpha-30"
        on:click={() => {
          Logout();
          isOpen = false;
        }}>
        Logout
      </button>
    {:else}
      <button
        class="w-full py-4 focus:outline-none dark:text-white border-b-2
        border-gray-700 dark:border-gray-400 hover:bg-white-alpha-30
        transition-colors duration-300 ease-in-out"
        on:click={() => {
          push('/');
          isOpen = false;
        }}>
        Login
      </button>
      <button
        class="w-full py-4 focus:outline-none dark:text-white border-b-2
        border-gray-700 dark:border-gray-400 hover:bg-white-alpha-30
        transition-colors duration-300 ease-in-out"
        on:click={() => {
          push('/register');
          isOpen = false;
        }}>
        Register
      </button>
    {/if}
  </div>
  <button
    transition:fade={{ duration: 300, easing: quintOut }}
    class="fixed left-0 right-0 top-0 bottom-0 h-full w-full bg-black-alpha-50
    focus:outline-none"
    on:click={() => (isOpen = false)} />
{/if}
