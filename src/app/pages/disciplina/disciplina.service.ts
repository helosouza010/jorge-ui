import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { disciplina } from '../core/models/disciplina.model';
import { disciplinaMock } from './disciplina.mock';

@Injectable({
  providedIn: 'root'
})

export class DisciplinaService {
  disciplina$: BehaviorSubject<disciplina[]> = new BehaviorSubject<disciplina[]>(disciplinaMock);

  constructor() {}

  getDisciplinas(): Observable<disciplina[]> {
    return this.disciplina$.asObservable();
  }

  adicionarDisciplina(disciplina: disciplina): void {
    const disciplinasAtuais = this.disciplina$.getValue();
    const novoId = disciplinasAtuais.length > 0
      ? Math.max(...disciplinasAtuais.map(d => d.id ?? 0)) + 1
      : 1;

    disciplina.id = novoId;
    disciplinasAtuais.push(disciplina);
    this.disciplina$.next(disciplinasAtuais);
  }
  editarDisciplina(disciplina: disciplina): void {
    const disciplinasAtuais = this.disciplina$.getValue();
    const index = disciplinasAtuais.findIndex(d => d.id === disciplina.id);

    if (index !== -1) {
      disciplinasAtuais[index] = disciplina;
      this.disciplina$.next(disciplinasAtuais);
    } else {
      console.error('Disciplina não encontrada');
    }
  }
  deletarDisciplina(id: number): void {
    const disciplinasAtuais = this.disciplina$.getValue();
    const index = disciplinasAtuais.findIndex(d => d.id === id);

    if (index !== -1) {
      disciplinasAtuais.splice(index, 1);
      this.disciplina$.next(disciplinasAtuais);
    } else {
      console.error('Disciplina não encontrada');
    }
  }
}