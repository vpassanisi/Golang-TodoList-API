import React from "react";
import { useMediaQuery } from "react-responsive";
import { useOvermind } from "../Overmind/index";

const Navbar: React.FC = () => {
  const {
    state: {
      darkMode: { isEnabled },
    },
    actions: {
      darkMode: { turnOff, turnOn },
    },
  } = useOvermind();

  let isDesktop: boolean = useMediaQuery({ query: "(min-width: 1024px)" });

  const darkModeToggle = (
    <button
      className="h-full hover:bg-white-alpha-30 transition-colors duration-300
    ease-in-out px-2"
      onClick={() => (isEnabled ? turnOff() : turnOn())}
    >
      <i className="material-icons">
        {isEnabled ? "brightness_7" : "brightness_4"}
      </i>
    </button>
  );

  const mobile = (
    <button
      className="h-full hover:bg-white-alpha-30 transition-colors duration-300
    ease-in-out px-2"
    >
      <i className="material-icons">menu</i>
    </button>
  );

  return (
    <div className="w-full h-16 bg-light-blue-300">
      <div className="flex flex-row justify-between w-90p h-full mx-auto">
        <div className="flex items-center text-2xl font-hairline h-full">
          TodoList
        </div>
        <div className="h-full">{isDesktop ? darkModeToggle : mobile}</div>
      </div>
    </div>
  );
};

export default Navbar;
