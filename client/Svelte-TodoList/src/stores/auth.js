import { writable } from "svelte/store";
import { push } from "svelte-spa-router";
import { error } from "./error.js";

const authorization = () => {
  const { subscribe, set, update } = writable(false);

  const Login = async (cred) => {
    try {
      const req = await fetch(`/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(cred),
      });

      const res = await req.json();

      if (res.success) {
        set(true);
        push("/todos");
      } else if (res.error) {
        console.log(res.error);
      } else {
        error.NewError(res.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const GetMe = async () => {
    try {
      const req = await fetch(`/api/v1/auth/getMe`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        set(true);
        push("/todos");
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      }
    } catch (err) {
      error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      console.log(err);
    }
  };

  const Logout = async () => {
    try {
      const req = await fetch(`/api/v1/auth/logout`, {
        method: "GET",
      });

      const res = await req.json();

      if (res.success) {
        push("/");
        set(false);
      } else if (res.error) {
        console.log(res.error);
        error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
      } else {
        error.NewError(res.message);
      }
    } catch (err) {
      console.log(err);
      error.NewError("Something went wrong (╯°□°）╯︵ ┻━┻)");
    }
  };

  return {
    subscribe,
    set,
    update,
    Login: Login,
    Logout: Logout,
    GetMe: GetMe,
  };
};

export const auth = authorization();
