import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';



@NgModule({
  declarations: [
    UppercasePipe,
    AutoFocusDirective
  ],
  imports: [
    CommonModule
  ],
 exports: [
    UppercasePipe,
    AutoFocusDirective,
    CommonModule,
  ]
})
export class SharedModule { }
