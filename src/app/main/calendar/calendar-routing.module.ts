import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteGuardService} from '../../shared/route-guard.service';
import {CalendarComponent} from './calendar.component';


const routes: Routes = [{
  path: '',
  canActivate: [RouteGuardService],
  component: CalendarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
