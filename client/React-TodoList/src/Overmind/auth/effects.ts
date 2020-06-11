import type { AuthState } from "./state";

// Effects retrieve or create data and format it so that actions can put it into state

export const api = {
  async login(cred: object) {
    let data: AuthState = {
      isAuthenticated: false,
      user: null,
      error: null,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

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
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

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
      }
      return data;
    } catch (err) {
      console.log(err);
      return data;
    }
  },
  async createUser(body: object) {
    let data: AuthState = {
      isAuthenticated: false,
      user: null,
      error: null,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
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
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
  async logout() {
    let data: AuthState = {
      isAuthenticated: false,
      user: null,
      error: null,
    };

    const el: HTMLElement | null = document.getElementById("loading");
    if (el) el.classList.remove("invisible");

    try {
      const req = await fetch(`/api/v1/auth/logout`, {
        method: "GET",
        credentials: "include",
      });

      const res = await req.json();

      if (res.error) {
        data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      } else if (!res.success) {
        data.error = res.message;
      }
      if (el) el.classList.add("invisible");

      return data;
    } catch (err) {
      console.log(err);
      data.error = "Something went wrong (╯°□°）╯︵ ┻━┻)";
      if (el) el.classList.add("invisible");

      return data;
    }
  },
};
