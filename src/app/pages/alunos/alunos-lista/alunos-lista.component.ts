import { Component, OnInit } from '@angular/core';
import { aluno } from '../../core/models/aluno.model';
import { alunosMock} from 'src/app/pages/alunos/alunos.mock'; // <- Importando os dados mockados

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: aluno[] = [];

  constructor() {}

  ngOnInit(): void {
    this.alunos = alunosMock;
  }
}