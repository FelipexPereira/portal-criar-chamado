import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu-navegacao',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu-navegacao.component.html',
  styleUrl: './menu-navegacao.component.scss',
})
export class MenuNavegacaoComponent {
  constructor(private router: Router, private cookie: CookieService) {}

  public logout() {
    this.cookie.delete('USER_TOKEN');
    this.router.navigateByUrl('/login');
  }
  public home() {
    this.router.navigateByUrl('/');
  }
  public novo() {
    this.router.navigateByUrl('/dashboard');
  }
}
