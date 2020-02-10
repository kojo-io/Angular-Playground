import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import {SharedModule} from '../../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgDateComponent } from './ag-date/ag-date.component';
import { AgCalendarComponent } from './ag-calendar/ag-calendar.component';


@NgModule({
  declarations: [DirectivesComponent, AgDateComponent, AgCalendarComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DirectivesModule { }
