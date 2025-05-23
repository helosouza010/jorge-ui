import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  redirectTo: 'alunos',
  pathMatch: 'full'
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
