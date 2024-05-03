import { LoginResponse, LoginEnvio } from './../../login/interface/login.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  public postLogin(param: LoginEnvio): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('http://100.96.1.2:3333/users', param)
  }
}
