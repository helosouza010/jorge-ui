import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import{DisciplinaService} from 'src/app/pages/disciplina/disciplina.service';
import { disciplina } from '../../core/models/disciplina.model';  
import { disciplinaMock } from 'src/app/pages/disciplina/disciplina.mock'; // <- Importando os dados mockados

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css']
})
export class DisciplinaListaComponent implements OnInit {
  disciplinas: disciplina[] = [];
  loading = true;
  display: boolean = false;

  constructor(
    private spinner: NgxSpinnerService,
    private disciplinaService: DisciplinaService
  ) { }

  ngOnInit():void {
    this.spinner.show();
    this.loading = true;

    // Simulando a obtenção de dados com um mock
    // this.disciplinas = disciplinaMock; // <- Usando os dados mockados

    // Obtendo os dados reais do serviço
    this.disciplinaService.disciplina$.subscribe((disciplinas: disciplina[]) => {
      this.loading = false;
      this.disciplinas = disciplinas;
      this.spinner.hide();
    });
  }

}
