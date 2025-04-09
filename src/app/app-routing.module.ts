import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'disciplinas',
    loadChildren: () =>
      import('./pages/disciplinas/disciplina.module').then((m) => m.DisciplinaModule)
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
