import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefa/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
