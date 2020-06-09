import { writable } from "svelte/store";
import { error } from "./error.js";

const todo = () => {
  const { subscribe, set, update } = writable([]);

  const GetTodos = async () => {
    document.getElementById("loading").classList.remove("invisible");
    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        set(res.message);
        SortTodos();
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
    document.getElementById("loading").classList.add("invisible");
  };

  const NewTodo = async (todo) => {
    document.getElementById("loading").classList.remove("invisible");
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
    document.getElementById("loading").classList.add("invisible");
  };

  const UpdateTodo = async (todo, id) => {
    document.getElementById("loading").classList.remove("invisible");
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
          const index = n.findIndex((val, i) => val._id === id);

          n[index] = res.message;

          return n;
        });
        SortTodos();
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
    document.getElementById("loading").classList.add("invisible");
  };

  const DeleteTodo = async (id) => {
    document.getElementById("loading").classList.remove("invisible");
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
    document.getElementById("loading").classList.add("invisible");
  };

  const SortTodos = () => {
    update((n) => {
      let done = n.filter((todo) => todo.done);
      let notDone = n.filter((todo) => !todo.done);

      done.sort((a, b) => b.createdAt - a.createdAt);
      notDone.sort((a, b) => b.createdAt - a.createdAt);

      return [...notDone, ...done];
    });
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
