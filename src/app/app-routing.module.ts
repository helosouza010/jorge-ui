import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'disciplina',
    loadChildren: () =>
      import('./pages/disciplina/disciplina.module').then(m => m.DisciplinaModule)
  },
  {
    path: 'professor',
    loadChildren: () =>
      import('./pages/professor/professor.module').then(m => m.ProfessorModule)
  },
    {
  path: 'alunos',
  loadChildren: () =>
    import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
