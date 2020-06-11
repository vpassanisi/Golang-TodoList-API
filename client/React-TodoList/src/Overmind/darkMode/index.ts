import { IConfig } from "overmind";
import { state } from "./state";
import * as actions from "./actions";

// brings darkmode state and actions together in one object

export const darkMode = {
  state,
  actions,
};

declare module "overmind" {
  interface Config extends IConfig<typeof darkMode> {}
}
