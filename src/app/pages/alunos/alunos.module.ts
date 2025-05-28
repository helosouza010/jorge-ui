import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos.routing';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { PrimengModule } from 'src/app/primeng.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ReactiveFormsModule} from '@angular/forms';
import{SharedModule} from 'src/app/shared/shared.module';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    AlunosListaComponent,
    AlunosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    PrimengModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    SharedModule,
    SidebarModule
  ]
})
export class AlunosModule {}
