// Importação dos módulos e componentes necessários do Angular
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../services/login/login.service'; // Importação do serviço de login
import { LoginResponse } from './interface/login.models'; // Importação do modelo de resposta do login
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'; // Importação dos módulos HTTP do Angular
import { Router } from '@angular/router'; // Importação do serviço de roteamento
import { CommonModule } from '@angular/common'; // Importação do módulo CommonModule
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login2', // Seletor do componente
  standalone: true,
  // Lista de módulos importados para o componente
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './login.component.html', // Arquivo de modelo do componente
  styleUrl: './login.component.scss', // Arquivo de estilo do componente
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup; // Declaração da propriedade loginForm do tipo FormGroup

  constructor(
    private formBuilder: FormBuilder, // Injeção do FormBuilder para construção de formulários
    private loginService: LoginService, // Injeção do serviço de login
    private router: Router, // Injeção do serviço de roteamento
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    // Método chamado quando o componente é inicializado
    // Criação do formulário de login utilizando o FormBuilder
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Campo de email com validadores de requerido e email
      password: ['', Validators.required], // Campo de senha com validador de requerido
    });

    // console.log('FUNCIONA', this.loginForm.value); // Exibe no console o valor do formulário de login
  }

  public login() {
    // Método para realizar o login
    let credencial = {
      login: this.loginForm.controls['email'].value, // Obtém o valor do campo de email do formulário
      password: this.loginForm.controls['password'].value, // Obtém o valor do campo de senha do formulário
    };

    // Chama o serviço de login para autenticação do usuário
    this.loginService.postLogin(credencial).subscribe({
      next: (response: LoginResponse) => {
        // Se a solicitação for bem-sucedida
        if (response.status === 200) {
          // Se a resposta for 200 (OK)
          this.router.navigate(['']); // Navega para a página de cadastro
          this.cookie.set('USER_TOKEN', response.accessToken)

          alert('Seja Bem-Vindo!!')
        }
      },
      error: (error: HttpErrorResponse) => {
        // Se ocorrer um erro na solicitação
        console.log(error); // Exibe o erro no console
      },
    });
  }
}
