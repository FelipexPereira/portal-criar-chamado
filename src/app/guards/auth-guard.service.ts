import { LoginService } from './../services/login/login.service';
import { Route, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private loginService: LoginService, private router: Router) {}

  // canActivate():
  // | Observable<boolean | UrlTree>
  // | Promise<boolean | UrlTree>
  // | boolean
  // | UrlTree {
  //   if(!this.loginService.loginCookie()){
  //     this.router.navigate(['/login'])
  //     return false
  //   }

  //   this.loginService.loginCookie()
  // }


  canActivate():
  | Observable<boolean | UrlTree>  // Pode retornar um Observable que emite um booleano ou um UrlTree
  | Promise<boolean | UrlTree>     // Pode retornar uma Promise que resolve para um booleano ou um UrlTree
  | boolean                         // Pode retornar diretamente um booleano
  | UrlTree {                       // Pode retornar diretamente um UrlTree
  if (!this.loginService.loginCookie()) { // Verifica se o usuário não está logado
    this.router.navigate(['/login']);      // Redireciona para a página de login
    return false;                          // Retorna falso para bloquear a navegação
  }

  this.loginService.loginCookie(); // Verifica se o usuário está logado novamente (opcional, pode ser removido)
  return true;                      // Permite a navegação, pois o usuário está logado
}

}
