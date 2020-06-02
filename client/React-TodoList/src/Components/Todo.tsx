import React from "react";
import { useOvermind } from "../Overmind";
import { UpdateTodoArg } from "../Overmind/todos/actions";

interface Todo {
  _id: string;
  title: string;
  description: string;
  user: string;
  isDone: boolean;
  createdAt: number;
  updatedAt: number;
}

interface TodoProps {
  todo: Todo;
  key: number;
}

const Todo: React.FC<TodoProps> = (props) => {
  const { todo } = props;

  const {
    actions: {
      todos: { updateTodo, deleteTodo },
    },
  } = useOvermind();

  const date = new Date(todo.createdAt * 1000);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
  });
  const [{ value: month }, , { value: day }] = dateTimeFormat.formatToParts(
    date
  );

  // changeIsDone.body.isdone CANNOT be camelcase because ShouldBindJSON in this route does not respect case
  let changeIsDone: UpdateTodoArg = {
    id: todo._id,
    body: {
      isdone: !todo.isDone,
    },
  };

  return (
    <div className="flex flex-row items-center h-full w-full border border-black dark:border-white p-2">
      <input
        className="mx-4"
        type="checkbox"
        checked={todo.isDone}
        onChange={() => updateTodo(changeIsDone)}
      />
      <div className="h-full w-full">
        <div>{todo.title}</div>
        <small>
          {todo.description} {` - ${month}/${day}`}
        </small>
      </div>
      <button
        className="flex h-full mx-2 focus:outline-none"
        onClick={() => deleteTodo(todo._id)}
      >
        <i className="material-icons text-red-800">clear</i>
      </button>
    </div>
  );
};

export default Todo;
