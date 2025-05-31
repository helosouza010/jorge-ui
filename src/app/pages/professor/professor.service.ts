import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { professor } from '../core/models/professor.model';
import { professorMock } from './professor.mock';

@Injectable({
  providedIn: 'root'
})


export class ProfessorService {
  professor$: any;
  // Aqui você pode implementar os métodos necessários para gerenciar os professores,Por exemplo, adicionar, editar, deletar e buscar professores
  
  getProfessores(): any[] {

    // Aqui você pode retornar uma lista de professores, por exemplo, de um mock ou de uma API

    return [];
  }

  adicionarProfessor(professor: any): void {
    const professoresAtuais = this.getProfessores();
    const novoId = professoresAtuais.length > 0
      ? Math.max(...professoresAtuais.map(p => p.id ?? 0)) + 1
      : 1;

    professor.id = novoId;
    professoresAtuais.push(professor);
  }



  // Exemplo de método para editar um professor
  editarProfessor(professor: any): void {
    const professoresAtuais = this.getProfessores();
    const index = professoresAtuais.findIndex(p => p.id === professor.id);

    if (index !== -1) {
      professoresAtuais[index] = professor;
    } else {
      console.error('Professor não encontrado');
    }
  }



  // Exemplo de método para deletar um professor
  deletarProfessor(id: number): void {
    const professoresAtuais = this.getProfessores();
    const index = professoresAtuais.findIndex(p => p.id === id);

    if (index !== -1) {
      professoresAtuais.splice(index, 1);
    } else {
      console.error('Professor não encontrado');
    }
  }
}