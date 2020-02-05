import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, SideNavComponent],
  exports: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
