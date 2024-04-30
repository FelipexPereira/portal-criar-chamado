import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';

export const routes: Routes = [
  { path: '', component: CadastroChamadoComponent },
  { path: 'Login2', component: Login2Component }
];
