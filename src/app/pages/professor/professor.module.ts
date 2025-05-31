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
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { __classPrivateFieldGet } from 'tslib';

@NgModule({
  declarations: [
    ProfessorCadastroComponent,
    ProfessorListaComponent
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
    MessageModule
  ],
})
export class ProfessorModule {}