import {AlunoService} from '../alunos.service';
import { Component, OnInit } from '@angular/core';
import { aluno } from '../../core/models/aluno.model';
import { alunosMock} from 'src/app/pages/alunos/alunos.mock'; // <- Importando os dados mockados
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {

  alunos: aluno[] = [];
  loading = true;
  display: boolean=false;


  constructor(
              private spinner: NgxSpinnerService,
              private alunoService: AlunoService
  ) {}

  statusOptions = [
    { name: 'Cursando' },
    { name: 'Formado' },
    { name: 'Trancado' },
    { name: 'Desistente' },
    { name: 'Transferido' },
    { name: 'Desligado' },
    { name: 'Transferido para outra instituição' },
    { name: 'Transferido para outro curso' },
    { name: 'Transferido para outra unidade' },
    { name: 'Transferido para outro campus' },
    { name: 'Transferido para outro polo' },
    { name: 'Transferido para outra modalidade' },
    { name: 'Transferido para outro turno' },
    { name: 'Transferido para outra turma' },
  ];






  ngOnInit(): void {
    this.spinner.show();
    this.loading = true;

    this.alunoService.aluno$.subscribe((alunos: aluno[])=> {
      this.loading = false;
      this.alunos=alunos;
      this.spinner.hide();
    });



  }
}
