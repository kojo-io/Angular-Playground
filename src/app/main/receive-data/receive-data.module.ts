import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiveDataRoutingModule } from './receive-data-routing.module';
import { ReceiveDataComponent } from './receive-data.component';


@NgModule({
  declarations: [ReceiveDataComponent],
  exports: [
    ReceiveDataComponent
  ],
  imports: [
    CommonModule,
    ReceiveDataRoutingModule
  ]
})
export class ReceiveDataModule { }
