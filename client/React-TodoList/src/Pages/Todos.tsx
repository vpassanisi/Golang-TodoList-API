import React, { useEffect } from "react";
import { useOvermind } from "../Overmind";
import { useHistory } from "react-router-dom";

import NewTodo from "../Components/NewTodo";
import Todo from "../Components/Todo";

const Todos: React.FC = () => {
  const {
    state: {
      auth: { isAuthenticated },
      todos: { todos },
    },
    actions: {
      todos: { getTodos },
    },
  } = useOvermind();

  const history = useHistory();

  let allTodos = todos.map((todo, index) => (
    <Todo todo={todo as Todo} key={index} />
  ));

  useEffect(() => {
    if (!isAuthenticated) history.push("/");

    getTodos();

    //eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <section>
      <NewTodo />
      <div className="flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white">
        {allTodos}
      </div>
    </section>
  );
};

export default Todos;
