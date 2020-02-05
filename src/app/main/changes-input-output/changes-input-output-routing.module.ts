import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangesInputOutputComponent} from './changes-input-output.component';
import {RouteGuardService} from '../../shared/route-guard.service';


const routes: Routes = [{
  path: '',
  canActivate: [RouteGuardService],
  component: ChangesInputOutputComponent,
  data: {
    animation: 'ChangesInputOutputComponent'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangesInputOutputRoutingModule { }
