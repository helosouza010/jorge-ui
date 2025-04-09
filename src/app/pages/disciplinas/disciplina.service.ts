import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { disciplina } from '../core/models/disciplina.model';
@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  disciplinaUrl: string = '';

  constructor(private http: HttpClient) {
    this.disciplinaUrl =
      'https://67edb9834387d9117bbe7210.mockapi.io/jorge/disciplinas';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.disciplinaUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }

  adicionar(obj: disciplina): Promise<disciplina>{
    return firstValueFrom(this.http.post<disciplina>(this.disciplinaUrl, obj));
  }
}