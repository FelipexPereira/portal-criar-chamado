import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';
import { LoginComponent } from './login/login.component';
import { TreinoComponent } from './treino/treino.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ss', component: CadastroChamadoComponent },
  { path: 's', component: TreinoComponent },
];
