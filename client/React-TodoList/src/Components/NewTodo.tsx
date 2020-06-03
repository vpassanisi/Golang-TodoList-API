import React from "react";
import { useOvermind } from "../Overmind";

const NewTodo: React.FC = () => {
  const {
    actions: {
      todos: { newTodo },
    },
  } = useOvermind();
  interface NewTodo {
    title: string | null;
    description: string | null;
  }

  const newTodoData: NewTodo = {
    title: null,
    description: null,
  };

  return (
    <div className="flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white">
      <div className="text-center  text-4xl font-hairline mb-4">New Todo</div>
      <input
        className="border-b-2 border-black dark:border-white bg-transparent 
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => (newTodoData.title = e.target.value as string)}
      />
      <input
        className="border-b-2 border-black dark:border-white bg-transparent
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
        type="text"
        placeholder="Description"
        name="description"
        onChange={(e) => (newTodoData.description = e.target.value as string)}
      />
      <button
        className="bg-light-blue-300 py-2 rounded shadow focus:outline-none"
        onClick={() => newTodo(newTodoData)}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodo;
