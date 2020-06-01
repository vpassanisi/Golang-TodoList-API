import React, { useEffect } from "react";
import { useOvermind } from "../Overmind";
import { useHistory } from "react-router-dom";

const Login: React.FC = (props) => {
  const {
    state: {
      auth: { isAuthenticated },
    },
    actions: {
      auth: { login, getMe },
    },
  } = useOvermind();

  const history = useHistory();

  interface Credencials {
    email: string | null;
    password: string | null;
  }

  let credencials: Credencials = {
    email: null,
    password: null,
  };

  useEffect(() => {
    if (isAuthenticated) history.push("/todos");
  }, [isAuthenticated, history]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/todos");
    } else {
      getMe();
    }

    if (isAuthenticated) history.push("/todos");

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex flex-col w-90p mx-auto p-4 max-w-screen-sm mt-24 bg-gray-400 dark:bg-gray-800 rounded shadow text-black dark:text-white">
        <div className="text-center  text-4xl font-hairline mb-4">Login</div>
        <input
          className="border-b-2 border-black dark:border-white bg-transparent 
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => (credencials.email = e.target.value as string)}
        />
        <input
          className="border-b-2 border-black dark:border-white bg-transparent
      focus:border-light-blue-300 mb-4 p-2 transition-colors
      duration-300 ease-in-out focus:outline-none placeholder-gray-700
      dark-placeholder:placeholder-gray-300"
          type="text"
          placeholder="Password"
          name="password"
          onChange={(e) => (credencials.password = e.target.value as string)}
        />
        <button
          className="bg-light-blue-300 py-2 rounded shadow focus:outline-none"
          onClick={() => login(credencials)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
