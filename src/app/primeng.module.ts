import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import{CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';


@NgModule({

  exports: [

    InputTextModule,
    ButtonModule,
    TableModule,
    CardModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToastModule,
   



  ],

})
export class PrimengModule { }
