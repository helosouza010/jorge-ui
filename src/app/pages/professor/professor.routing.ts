import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorListaComponent
  },
  {
    path: 'cadastro',
    component: ProfessorCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }