import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassDataRoutingModule } from './pass-data-routing.module';
import { PassDataComponent } from './pass-data.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReceiveDataModule} from '../receive-data/receive-data.module';


@NgModule({
  declarations: [PassDataComponent],
  imports: [
    CommonModule,
    PassDataRoutingModule,
    ReactiveFormsModule,
    ReceiveDataModule
  ]
})
export class PassDataModule { }
