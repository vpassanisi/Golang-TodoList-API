import { TodosState, Todo } from "./state";

// Effects retrieve or create data and format it so that actions can put it into state

export const api = {
  async getTodos() {
    let data: TodosState = {
      error: null,
      todos: [],
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        data.todos = res.message;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
  async newTodo(body: object) {
    interface Data {
      error: null | string;
      newTodo: Todo | null;
    }

    let data: Data = {
      error: null,
      newTodo: null,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const res = await req.json();

      if (res.success) {
        data.newTodo = res.message;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
  async updateTodo(body: object, id: string) {
    interface Data {
      error: null | string;
      updatedTodo: Todo | null;
    }
    let data: Data = {
      error: null,
      updatedTodo: null,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const res = await req.json();

      if (res.success) {
        data.updatedTodo = res.message as Todo;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
  async deleteTodo(id: string) {
    interface Data {
      error: null | string;
      success: boolean;
    }

    let data: Data = {
      error: null,
      success: false,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        data.success = res.success;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
  sortTodos(todos: Todo[]) {
    let done = todos.filter((todo: Todo) => todo.done);
    let notDone = todos.filter((todo: Todo) => !todo.done);

    done.sort((a, b) => b.createdAt - a.createdAt);
    notDone.sort((a, b) => b.createdAt - a.createdAt);

    return [...notDone, ...done];
  },
};
