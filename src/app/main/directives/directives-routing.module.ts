import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DirectivesComponent} from './directives.component';
import {RouteGuardService} from '../../shared/route-guard.service';


const routes: Routes = [{
  path: '',
  canActivate: [RouteGuardService],
  component: DirectivesComponent,
  data: {
    animation: 'DirectivesComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
