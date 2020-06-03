import { TodosState, Todo } from "./state";

export const api = {
  async getTodos() {
    let data: TodosState = {
      error: null,
      todos: [],
    };
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
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
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
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
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
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
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
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      return data;
    }
  },
};
