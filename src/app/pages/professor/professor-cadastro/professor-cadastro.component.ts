import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfessorService } from 'src/app/pages/professor/professor.service';
import { professor } from 'src/app/pages/core/models/professor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})

export class ProfessorCadastroComponent implements OnInit {

  loading: boolean = true;
  professor = new professor();
  idprof: number | undefined;
  form!: FormGroup;
cadastrarProfessor: any;

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private title: Title,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit():void {
    this.idprof = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Professor');

    // Mostra o loading para abrir a tela
    this.spinner.show();
    setTimeout(() => {
      this.form = this.fb.group({
        nome: ['', Validators.required],
        cpf: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
        titulacao: ['', Validators.required]
      });
      this.loading = false;
      this.spinner.hide();
    }, 1000); // simula carregamento, e esse 1000 é para o tempo de carregamento do loading
  }

  

}
