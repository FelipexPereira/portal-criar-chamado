export interface LoginResponse{
  status: number;
  data: Array<any>;
  menssage: string;
  accessToken: string;
}

export interface LoginEnvio{
  login: string,
  password: string,
}

// export interface ValidarToken {

// }
