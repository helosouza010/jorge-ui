import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos.routing';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { PrimengModule } from 'src/app/primeng.module';

@NgModule({
  declarations: [
    AlunosListaComponent,
    AlunosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    PrimengModule
  ]
})
export class AlunosModule {}