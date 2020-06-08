import React, { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useOvermind } from "../Overmind/index";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const {
    state: {
      darkMode: { isEnabled },
      auth: { isAuthenticated },
    },
    actions: {
      darkMode: { turnOff, turnOn },
      auth: { logout },
    },
  } = useOvermind();

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  let isDesktop: boolean = useMediaQuery({ query: "(min-width: 1024px)" });

  const desktopNav = (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          <button
            className="h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2"
            onClick={() => logout()}
          >
            Logout
          </button>
          <button
            className="flex items-center h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2"
            onClick={() => (isEnabled ? turnOff() : turnOn())}
          >
            <i className="material-icons">
              {isEnabled ? "brightness_7" : "brightness_4"}
            </i>
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <button
            className="h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2"
            onClick={() => history.push("/")}
          >
            Login
          </button>
          <button
            className="h-full hover:bg-white-alpha-30 transition-colors duration-300 ease-in-out focus:outline-none px-2"
            onClick={() => history.push("/register")}
          >
            Regsiter
          </button>
          <button
            className="flex items-center h-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2"
            onClick={() => (isEnabled ? turnOff() : turnOn())}
          >
            <i className="material-icons">
              {isEnabled ? "brightness_7" : "brightness_4"}
            </i>
          </button>
        </Fragment>
      )}
    </Fragment>
  );

  const mobile = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="h-full hover:bg-white-alpha-30 transition-colors duration-300
    ease-in-out px-2 focus:outline-none"
    >
      <i className="material-icons">menu</i>
    </button>
  );

  return (
    <div className="w-full h-16 bg-light-blue-300">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-row justify-between w-90p h-full mx-auto">
        <div className="flex items-center text-2xl font-hairline h-full">
          TodoList
        </div>
        <div className="flex flex-row items-center justify-center h-full">
          {isDesktop ? desktopNav : mobile}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
