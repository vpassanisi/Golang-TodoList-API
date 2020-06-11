import React from "react";
import { useOvermind } from "../Overmind";

// When there is an error is state this component will show itself with the content of the error
const Error: React.FC = () => {
  const {
    state: {
      auth: { error: authErr },
      todos: { error: todosErr },
    },
  } = useOvermind();
  return (
    <div
      className={`fixed bottom-0 w-full h-16 bg-red-500 text-white transition-transform transform ${
        authErr !== null || todosErr !== null ? " " : "translate-y-16"
      } duration-200 ease-in-out`}
    >
      <div className="flex flex-row items-center justify-center text-3xl text-center max-w-full h-full">
        {authErr as string}
        {todosErr as string}
      </div>
    </div>
  );
};

export default Error;
