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

//Método para bsucar aluno por id
buscarPorId(id: number): Promise<aluno | undefined> {
  return new Promise((resolve, reject) => {
    const alunoEncontrado = this.alunos.find(aluno => aluno.id === id);
    if (alunoEncontrado) {
      resolve(alunoEncontrado);
    } else {
      reject('Aluno não encontrado');
    }
  });

}
  //Método para editar aluno
  editarAluno(alunoEditado: aluno): void {
    const index = this.alunos.findIndex(a => a.id === alunoEditado.id);
    if (index !== -1) {
      this.alunos[index] = alunoEditado;
    }
  }

  //Método para deletar aluno
  deletarAluno(id: number): void {
    this.alunos = this.alunos.filter(aluno => aluno.id !== id);
  }
}
