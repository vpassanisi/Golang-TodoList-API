<template>
  <div
    class="fixed bottom-0 flex items-center justify-center bg-red-500 text-white text-2xl w-full h-16 transition-transform transform duration-200 ease-in-out"
    v-bind:class="{ 'translate-y-16': !authError }"
  >{{ authError }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Error",
  computed: mapState({
    authError: state => state.auth.error
  })
};
</script>
