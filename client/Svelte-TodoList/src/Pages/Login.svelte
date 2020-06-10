<script>
  import { auth } from "../stores/auth.js";
  import { onMount } from "svelte";

  onMount(() => {
    auth.GetMe();
  });

  let cred = {
    email: "",
    password: ""
  };
</script>

<section>
  <div
    class="flex flex-col w-90p bg-gray-300 dark:bg-gray-700 mx-auto mt-24 p-4
    rounded shadow max-w-screen-sm">
    <div
      class="text-center text-4xl text-black dark:text-white font-hairline mb-4">
      Login
    </div>
    <input
      class="border-b-2 border-black dark:border-white bg-transparent
      focus:border-deep-orange-a400 text-black dark:text-white mb-4 p-2
      transition-colors duration-300 ease-in-out focus:outline-none
      placeholder-gray-700 dark-placeholder:placeholder-gray-300"
      type="text"
      placeholder="Email"
      name="email"
      bind:value={cred.email} />
    <input
      class="border-b-2 border-black dark:border-white bg-transparent
      focus:border-deep-orange-a400 text-black dark:text-white mb-4 p-2
      transition-colors duration-300 ease-in-out focus:outline-none
      placeholder-gray-700 dark-placeholder:placeholder-gray-300"
      type="text"
      placeholder="Password"
      name="password"
      bind:value={cred.password} />
    <button
      on:click={() => auth.Login(cred)}
      class="bg-light-blue-400 py-2 rounded shadow focus:outline-none">
      Submit
    </button>
  </div>
</section>
