import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DisciplinaModule} from './pages/disciplinas/disciplina.module';
import{AlunosModule}from './pages/alunos/alunos.module';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    TableModule,
    FormsModule,
    CardModule,
    AlunosModule,
    DisciplinaModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
