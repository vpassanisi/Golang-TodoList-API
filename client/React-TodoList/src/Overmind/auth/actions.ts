import { AsyncAction } from "overmind";

export const login: AsyncAction<object> = async ({ state, effects }, cred) => {
  state.auth = await effects.auth.api.login(cred);

  if (state.auth.error) {
    state.auth.error = (await clearError()) as null;
  }
};

export const getMe: AsyncAction = async ({ state, effects }) => {
  state.auth = await effects.auth.api.getMe();

  if (state.auth.error) {
    state.auth.error = (await clearError()) as null;
  }
};

const clearError = () => {
  return new Promise<null>((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
};
