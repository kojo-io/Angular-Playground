import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcontentTestRoutingModule } from './ngcontent-test-routing.module';
import { NgcontentTestComponent } from './ngcontent-test.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [NgcontentTestComponent, ProjectContentComponent],
    imports: [
        CommonModule,
        NgcontentTestRoutingModule,
        FormsModule
    ]
})
export class NgcontentTestModule { }
