import { Action } from "overmind";

export const turnOn: Action = ({ state }) => {
  document.documentElement.classList.add("mode-dark");

  state.darkMode.isEnabled = true;
};

export const turnOff: Action = ({ state }) => {
  document.documentElement.classList.remove("mode-dark");

  state.darkMode.isEnabled = false;
};
