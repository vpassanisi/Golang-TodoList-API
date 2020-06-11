import { IConfig } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

// brings todos state, actions, and effects together in one object

export const todos = {
  state,
  actions,
  effects,
};

declare module "overmind" {
  interface Config extends IConfig<typeof todos> {}
}
