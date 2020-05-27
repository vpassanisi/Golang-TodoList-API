import { writable } from "svelte/store";

const todo = () => {
  const { subscribe, set, update } = writable([]);

  const GetTodos = async () => {
    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        set(res.message);
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      } else {
        error.NewError(res.message);
      }
    } catch (err) {
      console.log(err);
      error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
    }
  };

  const NewTodo = async (todo) => {
    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(todo),
      });

      const res = await req.json();

      if (res.success) {
        update((n) => [res.message, ...n]);
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      } else {
        error.NewError(res.message);
      }
    } catch (err) {
      console.log(err);
      error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
    }
  };

  const UpdateTodo = async (todo, id) => {
    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(todo),
      });

      const res = await req.json();

      if (res.success) {
        update((n) => {
          const index = n.findIndex((val, i) => {
            return val._id === id;
          });

          n[index] = res.message;

          return n;
        });
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      } else {
        error.NewError(res.message);
      }
    } catch (err) {}
  };

  const DeleteTodo = async (id) => {
    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        update((n) => {
          const index = n.findIndex((val, i) => {
            return val._id === id;
          });

          n.splice(index, 1);

          return n;
        });
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      } else {
        error.NewError(res.message);
      }
    } catch (err) {
      console.log(res.err);
      error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
    }
  };

  const SortTodos = () => {
    update((n) => {});
  };

  return {
    subscribe,
    set,
    update,
    GetTodos: GetTodos,
    NewTodo: NewTodo,
    DeleteTodo: DeleteTodo,
    UpdateTodo: UpdateTodo,
  };
};

export const todos = todo();
