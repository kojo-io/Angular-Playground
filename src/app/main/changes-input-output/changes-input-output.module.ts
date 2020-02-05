import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangesInputOutputRoutingModule } from './changes-input-output-routing.module';
import { ChangesInputOutputComponent } from './changes-input-output.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared';
import { ChildComponentComponent } from './child-component/child-component.component';


@NgModule({
  declarations: [ChangesInputOutputComponent, ChildComponentComponent],
  imports: [
    CommonModule,
    ChangesInputOutputRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ChangesInputOutputModule { }
