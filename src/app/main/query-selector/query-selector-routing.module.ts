import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuerySelectorComponent} from './query-selector.component';


const routes: Routes = [{
  path: '',
  component: QuerySelectorComponent,
  data: {
    animation: 'QuerySelectorComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuerySelectorRoutingModule { }
