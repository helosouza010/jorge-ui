import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DisciplinaService } from '../disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { disciplina } from '../../core/models/disciplina.model'; // Ajuste o path se necessário
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
  loading: boolean = true;
  disciplina = new disciplina();
  iddisc: number | undefined;
  form!: FormGroup;
  getDisciplinaById: any;
cadastrarDisciplina: any;

  constructor(
    private disciplinaService: DisciplinaService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private title: Title,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) { }

  ngOnInit():void {
    this.iddisc = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Disciplina');

    // Mostra o loading para abrir a tela
    this.spinner.show();
    setTimeout(() => {
      this.form = this.fb.group({
        descricao: ['', Validators.required],
        status: ['', Validators.required]
      });
      this.loading = false;
      this.spinner.hide();
    }, 1000); // simula carregamento, e esse 1000 é para o tempo de carregamento do loading

    if (this.iddisc) {
      this.getDisciplinaById(this.iddisc);
  }

}}
