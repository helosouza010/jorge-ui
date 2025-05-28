import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { aluno } from '../../core/models/aluno.model'; // Ajuste o path se necessário
import { AlunoService } from 'src/app/pages/alunos/alunos.service'; // Ajuste o path se necessário
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {

 loading:boolean=true;

  alunos = new aluno();
  iddisc: number | undefined;
  form!: FormGroup;

  statusOptions = [
    { name: 'Cursando' },
    { name: 'Formado' },
    { name: 'Trancado' },
    { name: 'Desistente' },
    { name: 'Transferido' }
  ];


  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private title: Title,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iddisc = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Aluno');
    

    //Mostra o loading para abrir a tela
    this.spinner.show();
    setTimeout(()=> {
    this.form=this.fb.group({
      nome:['', Validators.required],
      cpf: ['',[Validators.required, Validators.required, Validators.pattern('[0-9]{11}')]],
      status: ['',Validators.required]
    });
    this.loading=false;
    this.spinner.hide();
  },1000);//simula carregamento, e esse 1000 e para o tempo de caregamento do loading
  }



cadastrarAluno(form: NgForm) {
  if (form.invalid) return;
  this.salvar();
}


  salvar(): void {
    if (this.form.invalid) return;
    this.loading=true;
    this.spinner.show();

    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary:'Sucesso',
        detail:'Aluno salvou com muitissimo sucesso'
      })

      this.loading=false;
      this.spinner.hide();
      this.router.navigate(['/alunos']);
    }, 1500);

  }
}
