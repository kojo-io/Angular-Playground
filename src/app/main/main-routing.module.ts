import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {RouteGuardService} from '../shared/route-guard.service';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'directives',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./directives/directives.module').then(u => u.DirectivesModule)
    },
    {
      path: 'changes-input-output',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./changes-input-output/changes-input-output.module').then(u => u.ChangesInputOutputModule)
    },
    {
      path: 'pass-data',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./pass-data/pass-data.module').then(u => u.PassDataModule)
    },
    {
      path: 'receive-data',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./receive-data/receive-data.module').then(u => u.ReceiveDataModule)
    },
    {
      path: 'ngcontent-test',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./ngcontent-test/ngcontent-test.module').then(u => u.NgcontentTestModule)
    },
    {
      path: 'simple-validators',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./simple-validators/simple-validators.module').then(u => u.SimpleValidatorsModule)
    },
    {
      path: 'query-selector',
      canActivate: [RouteGuardService],
      loadChildren: () => import('./query-selector/query-selector.module').then(u => u.QuerySelectorModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
