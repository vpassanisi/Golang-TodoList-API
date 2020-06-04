<template>
  <div>Todos</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos"]),
  },
  computed: mapState({
    todos: (state) => state.todosState.todos,
  }),
  mounted: function() {
    this.getTodos();
  },
};
</script>
