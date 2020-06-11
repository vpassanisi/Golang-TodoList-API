import { AsyncAction } from "overmind";
import { Todo } from "./state";

// actions are logic that handlke the data returned from effects and puts it into state

export const getTodos: AsyncAction = async ({ state, effects }) => {
  let todos = await effects.todos.api.getTodos();

  todos.todos = effects.todos.api.sortTodos(todos.todos);

  state.todos = todos;

  if (state.todos.error) state.todos.error = await clearError();
};

export type UpdateTodoArg = {
  body: object;
  id: string;
};

export const updateTodo: AsyncAction<UpdateTodoArg> = async (
  { state, effects },
  obj
) => {
  const updatedTodo = await effects.todos.api.updateTodo(obj.body, obj.id);

  const index = state.todos.todos.findIndex((val) => val._id === obj.id);

  if (updatedTodo.error) {
    state.todos.error = updatedTodo.error;
    state.todos.error = (await clearError()) as null;
  } else {
    state.todos.todos[index] = updatedTodo.updatedTodo as Todo;

    state.todos.todos = effects.todos.api.sortTodos(state.todos.todos);
  }
};

export const deleteTodo: AsyncAction<string> = async (
  { state, effects },
  id
) => {
  const deleteTodo = await effects.todos.api.deleteTodo(id);

  const index = state.todos.todos.findIndex((val) => val._id === id);

  if (deleteTodo.success) {
    state.todos.todos.splice(index, 1);
  } else {
    state.todos.error = deleteTodo.error;
    state.todos.error = (await clearError()) as null;
  }
};

export const newTodo: AsyncAction<object> = async (
  { state, effects },
  newTodo
) => {
  const data = await effects.todos.api.newTodo(newTodo);

  if (data.error) {
    state.todos.error = data.error;
    state.todos.error = (await clearError()) as null;
  } else if (data.newTodo) {
    let newState = [data.newTodo, ...state.todos.todos];

    state.todos.todos = newState;
  }
};

const clearError = () => {
  return new Promise<null>((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
};
