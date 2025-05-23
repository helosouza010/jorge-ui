import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seguranca-login',
  templateUrl: './seguranca-login.component.html',
  styleUrls: ['./seguranca-login.component.css']
})
export class SegurancaLoginComponent implements OnInit {
email: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

login():void{ // Lógica de autenticação (simulada aqui)
  // Se der certo, navega para a lista de alunos
  this.router.navigate(['/alunos/lista']);
}




}
