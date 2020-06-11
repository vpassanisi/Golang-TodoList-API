import { Action } from "overmind";

// actions are logic that handlke the data returned from effects and puts it into state

export const turnOn: Action = ({ state }) => {
  document.documentElement.classList.add("mode-dark");

  state.darkMode.isEnabled = true;
};

export const turnOff: Action = ({ state }) => {
  document.documentElement.classList.remove("mode-dark");

  state.darkMode.isEnabled = false;
};
