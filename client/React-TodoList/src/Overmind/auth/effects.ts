import type { AuthState } from "./state";

export const api = {
  async login(cred: object) {
    let data: AuthState = {
      isAuthenticated: false,
      user: null,
      error: null,
    };
    try {
      const req = await fetch(`/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(cred),
      });

      const res = await req.json();

      if (res.success) {
        data.isAuthenticated = true;
        data.user = res.message;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      return data;
    }
  },
  async getMe() {
    let data: AuthState = {
      isAuthenticated: false,
      user: null,
      error: null,
    };
    try {
      const req = await fetch(`/api/v1/auth/getMe`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.success) {
        data.isAuthenticated = true;
        data.user = res.message;
      } else if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else {
        data.error = res.message;
      }
      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      return data;
    }
  },
};
