import React from "react";
import { useOvermind } from "../Overmind";

const Error: React.FC = () => {
  const {
    state: {
      auth: { error },
    },
  } = useOvermind();
  return (
    <div
      className={`fixed bottom-0 w-full h-16 bg-red-500 text-white transition-transform transform ${
        error !== null ? " " : "translate-y-16"
      } duration-200 ease-in-out`}
    >
      <div className="flex flex-row items-center justify-center text-3xl text-center max-w-full h-full">
        {error as string}
      </div>
    </div>
  );
};

export default Error;
