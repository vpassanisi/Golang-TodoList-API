import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import { namespaced } from "overmind/config";
import { auth } from "./auth/index";
import { darkMode } from "./darkMode/index";
import { todos } from "./todos";

export const config = namespaced({
  darkMode,
  auth,
  todos,
});

declare module "overmind" {
  interface Config extends IConfig<typeof config> {
    state: typeof config.state;
    actions: typeof config.actions;
    effects: typeof config.effects;
  }
}

export const useOvermind = createHook<typeof config>();
