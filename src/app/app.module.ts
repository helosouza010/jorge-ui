import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import{AlunosModule}from './pages/alunos/alunos.module';
import { DropdownModule } from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {NgxSpinnerModule} from 'ngx-spinner';
import { MessageService } from 'primeng/api';

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
    DropdownModule,
    ButtonModule,
    InputTextModule,
    NgxSpinnerModule,
    ReactiveFormsModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
