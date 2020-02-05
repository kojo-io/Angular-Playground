import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyInputDirective } from './currency-input.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [CurrencyInputDirective],
  exports: [
    CurrencyInputDirective,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
