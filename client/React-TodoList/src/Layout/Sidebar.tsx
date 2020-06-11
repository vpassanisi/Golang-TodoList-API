import React, { Fragment } from "react";
import { useOvermind } from "../Overmind/index";
import { useHistory } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

// Sidebar for mobile navigation. Has logic for certain navigation based on state
const Sidebar: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props;
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

  return (
    <Fragment>
      <div
        className={`fixed flex flex-col items-center left-0 top-0 h-full w-48 bg-white dark:bg-dark-gray-800 dark:text-white shadow py-4 transform transition-transform ${
          isOpen ? "" : "-translate-x-48"
        } duration-300 ease-in-out z-10`}
      >
        <button
          className="flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400"
          onClick={() => (isEnabled ? turnOff() : turnOn())}
        >
          <i className="material-icons">
            {isEnabled ? "brightness_7" : "brightness_4"}
          </i>
        </button>
        <a
          className="flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
          ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400"
          href="/"
        >
          Pick A Framework
        </a>
        {isAuthenticated ? (
          <button
            className="flex items-center justify-center py-4 w-full hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400"
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
          >
            Logout
          </button>
        ) : (
          <Fragment>
            <button
              className="flex items-center justify-center py-4 w-full dark:text-white hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400"
              onClick={() => {
                history.push("/");
                setIsOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="flex items-center justify-center py-4 w-full dark:text-white hover:bg-white-alpha-30 focus:outline-none transition-colors duration-300
    ease-in-out px-2 border-b-2 border-gray-700 dark:border-gray-400"
              onClick={() => {
                history.push("/register");
                setIsOpen(false);
              }}
            >
              Register
            </button>
          </Fragment>
        )}
      </div>
      <button
        className={`fixed left-0 right-0 top-0 bottom-0 ${
          isOpen ? "bg-black-alpha-50  h-full w-full" : ""
        } transition-colors duration-300 ease-in-out`}
        onClick={() => setIsOpen(false)}
      />
    </Fragment>
  );
};

export default Sidebar;
