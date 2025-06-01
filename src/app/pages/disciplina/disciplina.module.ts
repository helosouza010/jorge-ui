import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ReactiveFormsModule} from '@angular/forms';
import{SharedModule} from 'src/app/shared/shared.module';
import {SidebarModule} from 'primeng/sidebar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { DisciplinaRoutingModule } from './disciplina.routing';

@NgModule({
  declarations: [
    DisciplinaCadastroComponent,
    DisciplinaListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    SharedModule,
    SidebarModule,
    MessagesModule,
    MessageModule,
    DisciplinaRoutingModule
  ],
})
export class DisciplinaModule { }
// This module defines the DisciplinaModule which includes components for managing "Disciplina" entities.