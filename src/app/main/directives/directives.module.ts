import { AgCalendarComponent } from './ag-calendar/ag-calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import {SharedModule} from '../../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DirectivesComponent, AgCalendarComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DirectivesModule { }
