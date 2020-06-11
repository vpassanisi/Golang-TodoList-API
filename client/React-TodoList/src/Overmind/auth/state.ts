// auth related state and the types for the data

export type User = {
  _id: string;
  name: string;
  email: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  error: string | null;
  user: User | null;
};

export const state: AuthState = {
  isAuthenticated: false,
  error: null,
  user: null,
};
