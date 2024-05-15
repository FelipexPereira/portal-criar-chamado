import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CadastroChamadoComponent } from './cadastro-chamado/cadastro-chamado.component';
import { LoginComponent } from './login/login.component';
import { TreinoComponent } from './treino/treino.component';
import { MenuNavegacaoComponent } from './shared/components/menu-navegacao/menu-navegacao/menu-navegacao.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: CadastroChamadoComponent },
  { path: 'dashboard', component: TreinoComponent },
];
