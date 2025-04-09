import { aluno } from '../core/models/aluno.model';
import { alunosMock } from './alunos.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: aluno[] = alunosMock.filter(a => a && a.nome && a.cpf); // Remove o objeto vazio

  getAlunos(): aluno[] {
    return this.alunos;
  }

  adicionarAluno(novoAluno: aluno): void {
    const novoId = this.alunos.length > 0
      ? Math.max(...this.alunos.map(a => a.id ?? 0)) + 1
      : 1;

    novoAluno.id = novoId;
    this.alunos.push(novoAluno);
  }
}