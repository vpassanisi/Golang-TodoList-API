// todos related state and the types for the data

export type Todo = {
  _id: string;
  title: string;
  description: string;
  user: string;
  done: boolean;
  createdAt: number;
  updatedAt: number;
};

export type TodosState = {
  error: string | null;
  todos: Todo[];
};

export const state: TodosState = {
  todos: [],
  error: null,
};
