import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgcontentTestComponent} from './ngcontent-test.component';


const routes: Routes = [{
  path: '',
  component: NgcontentTestComponent,
  data: {
    animation: 'NgcontentTestComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgcontentTestRoutingModule { }
