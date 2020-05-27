<script>
  import { media } from "../stores/watchMedia.js";
  import { darkMode } from "../stores/darkMode.js";
  import { auth } from "../stores/auth.js";
</script>

<div
  class="flex flex-row justify-center w-full h-16 bg-deep-orange-a400 shadow">
  <div class="flex flex-row justify-between w-90p h-full">
    <div class="flex flex-row items-center">TodoList</div>
    <div class="flex flex-row items-center">
      {#if $media.lg}
        <button
          class="h-full hover:bg-white-alpha-30 transition-colors duration-300
          ease-in-out px-2"
          on:click={() => auth.Logout()}>
          Logout
        </button>
        {#if $darkMode}
          <button
            on:click={() => darkMode.turnOff()}
            class="h-full px-4 focus:outline-none">
            <i class="material-icons flex">brightness_7</i>
          </button>
        {:else}
          <button
            on:click={() => darkMode.turnOn()}
            class="h-full px-4 focus:outline-none flex">
            <i class="material-icons">brightness_4</i>
          </button>
        {/if}
      {:else}
        <button class="h-full px-4 focus:outline-none">
          <i class="material-icons flex">menu</i>
        </button>
      {/if}
    </div>
  </div>
</div>
