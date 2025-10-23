export interface RegisterReq {
  email: string;
  name: string;
  password: string;
  hiredAt: string;
}

export interface LoginReq {
  email: string;
  password: string;
}
