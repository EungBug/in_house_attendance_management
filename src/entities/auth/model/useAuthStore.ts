import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  userId?: number;
  userName?: string;
  accessToken?: string;
  isAuthenticated: boolean;
  login: (user: { userName: string; accessToken: string; userId: number }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      userName: undefined,
      accessToken: undefined,
      isAuthenticated: false,
      login: (user: { userName: string; accessToken: string; userId: number }) =>
        set({
          userId: user.userId,
          userName: user.userName,
          accessToken: user.accessToken,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          userId: undefined,
          userName: undefined,
          accessToken: undefined,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'login',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
