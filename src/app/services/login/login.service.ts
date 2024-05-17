import {
  LoginResponse,
  LoginEnvio,
} from './../../login/interface/login.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private cookie: CookieService) {}

  // Método responsável por enviar uma solicitação POST para o servidor para fazer login
// Ele recebe um objeto do tipo LoginEnvio como parâmetro e retorna um Observable que emite uma resposta do tipo LoginResponse
public postLogin(param: LoginEnvio): Observable<LoginResponse> {
  return this.httpClient.post<LoginResponse>(
    'http://100.96.1.2:3333/users', // URL para o endpoint de login
    param                            // Parâmetro para a solicitação POST, contendo dados de login
  );
}

// Método para verificar se o usuário está logado, baseado na presença de um token de usuário no cookie
// Retorna true se o cookie 'USER_TOKEN' estiver presente, indicando que o usuário está logado; caso contrário, retorna false
loginCookie(): boolean {
  const COOKIE_TOKEN = this.cookie.get('USER_TOKEN'); // Obtém o token de usuário do cookie
  return COOKIE_TOKEN ? true : false;                 // Retorna true se o token estiver presente, senão retorna false
}
}
