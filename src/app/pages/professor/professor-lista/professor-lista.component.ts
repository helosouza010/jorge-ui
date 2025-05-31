import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { professor } from '../../core/models/professor.model';
import { professorMock } from 'src/app/pages/professor/professor.mock'; // <- Importando os dados mockados
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html',
  styleUrls: ['./professor-lista.component.css']
})
export class ProfessorListaComponent implements OnInit {

  professores: professor[] = [];
  loading = true;
  display: boolean = false;


  constructor(
    private spinner: NgxSpinnerService,
    private professorService: ProfessorService
  ) {}

  ngOnInit():void {
    this.spinner.show();
    this.loading = true;

    // Simulando a obtenção de dados de professores
    this.professorService.professor$.subscribe((professores: professor[]) => {
      this.loading = false;
      this.professores = professores;
      this.spinner.hide();
    });

    // Se você quiser usar os dados mockados, descomente a linha abaixo
    // this.professores = professoresMock;
  }

}
