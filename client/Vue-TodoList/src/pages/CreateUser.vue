<template>
  <div
    class="flex flex-col mx-auto mt-24 bg-gray-900 dark:bg-gray-300 w-90p max-w-screen-sm p-4 rounded shadow"
  >
    <div class="text-white dark:text-black text-4xl font-hairline text-center mb-4">Register</div>
    <input
      class="dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4"
      type="text"
      placeholder="Name"
      name="name"
      v-model="cred.name"
    />
    <input
      class="dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4"
      type="text"
      placeholder="Email"
      name="email"
      v-model="cred.email"
    />
    <input
      class="dark:text-black bg-transparent border-b-2 dark:border-gray-800 focus:border-vue-green-500 focus:outline-none transition-colors duration-300 ease-in-out dark-placeholder:placeholder-gray-800 p-2 mb-4"
      type="text"
      placeholder="Password"
      name="password"
      v-model="cred.password"
    />
    <button
      class="w-full p-2 bg-vue-green-500 rounded shadow focus:outline-none"
      v-on:click="handleRegister()"
    >Register</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions(["createUser", "getMe"]),
    handleRegister: function() {
      this.createUser(this.cred);
    }
  },
  data: () => {
    return {
      cred: {}
    };
  },
  computed: mapState({
    isAuthenticated: state => state.auth.isAuthenticated
  }),
  mounted: function() {
    if (this.isAuthenticated) {
      this.$router.push("/todos");
    } else {
      this.getMe();
    }
  }
};
</script>