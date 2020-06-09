<script>
  import Navbar from "./Layout/Navbar.svelte";
  import Login from "./Pages/Login.svelte";
  import Todos from "./Pages/Todos.svelte";
  import Router from "svelte-spa-router";
  import Error from "./Layout/Error.svelte";
  import NewUser from "./Pages/NewUser.svelte";

  import "./CSS/tailwind.css";

  import { media } from "./stores/watchMedia.js";
  import { darkMode } from "./stores/darkMode.js";

  if ($media.dark) {
    darkMode.turnOn();
  }

  const routes = {
    "/": Login,
    "/register": NewUser,
    "/todos": Todos
  };
</script>

<Navbar />
<Router {routes} />
<Error />
