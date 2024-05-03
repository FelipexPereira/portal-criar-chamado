import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroChamadoComponent },
];
