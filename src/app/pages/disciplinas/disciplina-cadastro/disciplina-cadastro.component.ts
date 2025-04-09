import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';
import { disciplina } from '../../core/models/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
   disciplinas = new disciplina();
  constructor(
    private disciplinaService: DisciplinaService
  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    console.log(form);
  }

  cadastroDisciplina(form: NgForm){
    console.log(this.disciplinas);
    // this.disciplinaService.adicionar(this.disciplina).then((obj) => {

    // })
  }
}
