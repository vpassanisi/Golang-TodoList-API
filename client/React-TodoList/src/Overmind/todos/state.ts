export type Todo = {
  _id: string;
  title: string;
  description: string;
  user: string;
  isDone: boolean;
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
