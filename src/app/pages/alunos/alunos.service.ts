import { aluno } from '../core/models/aluno.model';
import { alunosMock } from './alunos.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunosSubject= new BehaviorSubject <aluno[]>(alunosMock.filter(a => a && a.nome && a.cpf));
  aluno$: Observable<aluno[]> = this.alunosSubject.asObservable();

  getAlunos(): aluno[] {
    return this.alunosSubject.value;
  }

  adicionarAluno(novoAluno: aluno): void {
    const alunosAtuais=this.alunosSubject.value;
    const novoId = alunosAtuais.length > 0
      ? Math.max(...alunosAtuais.map(a => a.id ?? 0)) + 1
      : 1;

    novoAluno.id = novoId;
    this.alunosSubject.next([...alunosAtuais, novoAluno]);
  }

//Método para bsucar aluno por id
buscarPorId(id: number): Promise<aluno | undefined> {
  return new Promise((resolve, reject) => {
    const alunoEncontrado = this.alunosSubject.value.find(aluno => aluno.id === id);
    if (alunoEncontrado) {
      resolve(alunoEncontrado);
    } else {
      reject('Aluno não encontrado');
    }
  });

}
  //Método para editar aluno
  editarAluno(alunoEditado: aluno): void {
    const alunosAtuais = this.alunosSubject.value;
    const index = alunosAtuais.findIndex(a => a.id === alunoEditado.id);

    if (index !== -1) {
      const alunosAtualizados=[...alunosAtuais];
      alunosAtualizados[index]=alunoEditado;
      this.alunosSubject.next(alunosAtualizados);
    }
  }

  //Método para deletar aluno
  deletarAluno(id: number): void {
    const alunosAtuais = this.alunosSubject.value;
    const alunosAtualizados=alunosAtuais.filter(aluno=>aluno.id !==id);
    this.alunosSubject.next(alunosAtualizados);
  }
}
