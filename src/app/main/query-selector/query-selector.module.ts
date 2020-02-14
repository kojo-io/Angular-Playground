import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuerySelectorRoutingModule } from './query-selector-routing.module';
import { QuerySelectorComponent } from './query-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [QuerySelectorComponent],
  imports: [
    CommonModule,
    QuerySelectorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class QuerySelectorModule { }
