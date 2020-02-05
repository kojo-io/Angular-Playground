import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PassDataComponent} from './pass-data.component';


const routes: Routes = [{
  path: '',
  component: PassDataComponent,
  data: {
    animation: 'PassDataComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassDataRoutingModule { }
