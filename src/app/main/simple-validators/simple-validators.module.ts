import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleValidatorsRoutingModule } from './simple-validators-routing.module';
import { SimpleValidatorsComponent } from './simple-validators.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomValidatorDirective } from './custom-validator.directive';


@NgModule({
  declarations: [SimpleValidatorsComponent, CustomValidatorDirective],
  imports: [
    CommonModule,
    SimpleValidatorsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SimpleValidatorsModule { }
