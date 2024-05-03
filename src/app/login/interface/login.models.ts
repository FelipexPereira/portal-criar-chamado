export interface LoginResponse{
  status: number;
  data: Array<any>;
  menssage: string;
  acessToken: string;
}

export interface LoginEnvio{
  login: string,
  password: string,
}
