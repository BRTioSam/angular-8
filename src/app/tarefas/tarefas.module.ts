import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService} from './shared';
import { ListarTarefaComponent } from './listar'; 

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TarefasModule { }
