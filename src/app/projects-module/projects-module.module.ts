import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-module-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ItemProjectComponent } from './components/item-project/item-project.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    ItemProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  exports:[ProjectsComponent]
})
export class ProjectsModuleModule { }
