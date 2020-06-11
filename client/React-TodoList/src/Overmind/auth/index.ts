import { IConfig } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

// brings state, actions, and effects for auth into one object

export const auth = {
  state,
  actions,
  effects,
};

declare module "overmind" {
  interface Config extends IConfig<typeof auth> {}
}
