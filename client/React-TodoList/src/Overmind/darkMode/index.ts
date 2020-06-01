import { IConfig } from "overmind";
import { state } from "./state";
import * as actions from "./actions";

export const darkMode = {
  state,
  actions,
};

declare module "overmind" {
  interface Config extends IConfig<typeof darkMode> {}
}
