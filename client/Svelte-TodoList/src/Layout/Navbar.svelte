<script>
  import { media } from "../stores/watchMedia.js";
  import { darkMode } from "../stores/darkMode.js";
  import { auth } from "../stores/auth.js";
  import { push } from "svelte-spa-router";
  import Sidebar from "./Sidebar.svelte";

  const { turnOff, turnOn } = darkMode;
  const { Logout } = auth;

  let isOpen;
</script>

<div
  class="flex flex-row justify-center w-full h-16 bg-deep-orange-a400 shadow">
  <div class="flex flex-row justify-between w-90p h-full">
    <div class="flex flex-row items-center">TodoList</div>
    <div class="flex flex-row items-center">
      {#if $media.lg}
        {#if $auth}
          <button
            class="h-full hover:bg-white-alpha-30 transition-colors duration-300
            ease-in-out px-2 focus:outline-none"
            on:click={() => Logout()}>
            Logout
          </button>
        {:else}
          <button
            class="h-full hover:bg-white-alpha-30 transition-colors duration-300
            ease-in-out px-2 focus:outline-none"
            on:click={() => push('/')}>
            Login
          </button>
          <button
            class="h-full hover:bg-white-alpha-30 transition-colors duration-300
            ease-in-out px-2 focus:outline-none"
            on:click={() => push('/register')}>
            Register
          </button>
        {/if}
        <button
          on:click={() => {
            $darkMode ? turnOff() : turnOn();
          }}
          class="h-full px-4 focus:outline-none">
          {#if $darkMode}
            <i class="material-icons flex">brightness_7</i>
          {:else}
            <i class="material-icons flex">brightness_4</i>
          {/if}
        </button>
      {:else}
        <button
          class="h-full px-4 focus:outline-none"
          on:click={() => (isOpen = true)}>
          <i class="material-icons flex">menu</i>
        </button>
      {/if}
    </div>
  </div>
</div>
<Sidebar bind:isOpen />
