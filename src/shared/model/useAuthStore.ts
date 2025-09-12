import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  userName?: string;
  accessToken?: string;
  isAuthenticated: boolean;
  login: (user: { userName: string; accessToken: string }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      userName: undefined,
      accessToken: undefined,
      isAuthenticated: false,
      login: (user: { userName: string; accessToken: string }) =>
        set({
          userName: user.userName,
          accessToken: user.accessToken,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          userName: undefined,
          accessToken: undefined,
          isAuthenticated: false,
        }),
    }),
    {
      name: "login",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
