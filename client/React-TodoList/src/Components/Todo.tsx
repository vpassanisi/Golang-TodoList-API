import React from "react";
import { useOvermind } from "../Overmind";
import { UpdateTodoArg } from "../Overmind/todos/actions";
import { Todo } from "../Overmind/todos/state";

interface TodoProps {
  todo: Todo;
  key: number;
}

// Component of a single Todo. Updates the done status and button for deleting the Todo
const TodoComp: React.FC<TodoProps> = (props) => {
  const { todo } = props;

  const {
    actions: {
      todos: { updateTodo, deleteTodo },
    },
  } = useOvermind();

  const [{ value: month }, , { value: day }] = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
  }).formatToParts(new Date(todo.createdAt * 1000));

  // changeIsDone.body.isdone CANNOT be camelcase because ShouldBindJSON in this route does not respect case
  let changeIsDone: UpdateTodoArg = {
    id: todo._id,
    body: {
      done: !todo.done,
    },
  };

  return (
    <div className="flex flex-row items-center h-full w-full border border-black dark:border-white p-2 m-1">
      <input
        className="mx-4"
        type="checkbox"
        checked={todo.done}
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

export default TodoComp;
