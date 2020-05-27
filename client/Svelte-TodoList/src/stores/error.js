import { writable } from "svelte/store";

const err = () => {
  const { subscribe, set, update } = writable(null);

  const NewError = (str) => {
    set(str);
    setTimeout(() => set(null), 3000);
  };

  return {
    subscribe,
    set,
    update,
    NewError: NewError,
  };
};

export const error = err();
