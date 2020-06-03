import React, { useEffect, useState } from "react";
import { useOvermind } from "../Overmind";
import { useHistory } from "react-router-dom";

const CreateUser: React.FC = () => {
  const [newUser, setNewUser] = useState<NewUser>({
    name: null,
    email: null,
    password: null,
  });

  const {
    state: {
      auth: { isAuthenticated },
    },
    actions: {
      auth: { createUser },
    },
  } = useOvermind();

  const history = useHistory();

  interface NewUser {
    name: string | null;
    email: string | null;
    password: string | null;
  }

  useEffect(() => {
    if (isAuthenticated) history.push("/todos");
  }, [isAuthenticated, history]);

  return (
    <div className="flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white">
      <div className="text-center  text-4xl font-hairline mb-4">
        New Account
      </div>
      <input
        className="border-b-2 border-black dark:border-white bg-transparent 
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        className="border-b-2 border-black dark:border-white bg-transparent 
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
        type="text"
        placeholder="Email"
        name="email"
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        className="border-b-2 border-black dark:border-white bg-transparent
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
        type="text"
        placeholder="Password"
        name="password"
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button
        className="bg-light-blue-300 py-2 rounded shadow focus:outline-none"
        onClick={() => {
          createUser(newUser);
        }}
      >
        Register
      </button>
    </div>
  );
};

export default CreateUser;
