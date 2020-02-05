import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleValidatorsComponent} from './simple-validators.component';


const routes: Routes = [{
  path: '',
  component: SimpleValidatorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleValidatorsRoutingModule { }
