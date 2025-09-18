export interface RegisterRes {
  id: number;
  email: string;
  name: string;
  createdAt: string;
}

export interface LoginRes {
  id: number;
  name: string;
  accessToken: string;
}
