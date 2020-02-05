import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReceiveDataComponent} from './receive-data.component';


const routes: Routes = [{
  path: '',
  component: ReceiveDataComponent,
  data: {
    animation: 'ReceiveDataComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiveDataRoutingModule { }
