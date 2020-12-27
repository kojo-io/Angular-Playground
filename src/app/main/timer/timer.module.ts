import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';


@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
